import { ExerciseTrainingMaxPostData } from '../../types/types';
import { db } from '../database/db';

const getUserProgram = async function (user_id: number | string) {
   const query = `select program_id from users where user_id = $1;`;
   const response = await db.oneOrNone(query, user_id);
   return response;
};

const getAllProgramsByCategory = async function () {
   const currentQuery = `   
         SELECT c.category_name, c.id AS category_id,
      	(
      		SELECT json_agg(program)
      		FROM 
      		(
      			SELECT program.name, program.id AS program_id, program.body, (
      				SELECT json_agg(program_progression)
      				FROM 
      				(
      					SELECT pp.description, pp.min_rep, pp.max_rep, pp.weight_to_add, pp.id  
      					FROM program_progression AS pp
      					WHERE pp.program_id = program.id
      				) program_progression
      			) AS progression, program.is_default,
      			(
      			SELECT json_agg(workout)
      		FROM
      		(	
      			SELECT workout.week,workout.day, workout.id, 
				(	
      				SELECT json_agg(weightlifting_exercise)
      				FROM 
      				(
						SELECT weightlifting_exercise.name, weightlifting_exercise.id, weightlifting_exercise.gif_url, (
							SELECT json_agg(workout_set)
							FROM (
								SELECT workout_set.id, workout_set.set_number, workout_set.amrap, workout_set.percentage_rm, workout_set.reps_target
								FROM workout_set INNER JOIN workout_exercise ON workout_set.workout_exercise_id = workout_exercise.id
								WHERE workout_exercise.exercise_id = weightlifting_exercise.id
								AND workout_exercise.workout_id = workout.id
								ORDER BY exercise_rank_order, set_number
							)workout_set
						) AS SETS
						FROM workout_exercise 
						INNER JOIN weightlifting_exercise ON workout_exercise.exercise_id = weightlifting_exercise.id
						INNER JOIN workout_set ON workout_exercise.id = workout_set.workout_exercise_id
						WHERE workout.id = workout_exercise.workout_id
						GROUP BY weightlifting_exercise.id
						
      				) weightlifting_exercise
      			) AS exercises
      			FROM workout WHERE workout.program_id = program.id
      			ORDER BY week, day
      		) workout
      			) AS workouts
      			FROM program where c.id = program.category_id
      		) program
      	) AS programs
      	FROM category AS c
   `;
   const dbResponse = await db.many(currentQuery);
   return dbResponse;
};

const getAllExercisesByMuscle = async function () {
   const query = `
	   SELECT m.name AS muscle, m.id, 
	   (
	   	SELECT json_agg(weightlifting_exercise) 
	   	FROM
	   	(
	   		SELECT w.name, w.body_part, w.equipment, w.gif_url, w.id
	   		FROM weightlifting_exercise AS w
	   		WHERE w.muscle_id = m.id
	   	) weightlifting_exercise
	   ) AS exercises 
	   FROM muscle AS m 
      `;
   const dbResponse = await db.many(query);
   return dbResponse;
};

//updates user table to give them their selected program
const updateSelectedProgram = async (
   activeProgramId: number,
   user_id: number
) => {
   const query = `
   UPDATE users
   SET program_id = $<activeProgramId>
   WHERE user_id = $<user_id>
	`;
   const dbResponse = await db.none(query, { activeProgramId, user_id });
   return dbResponse;
};

const deleteCurrentRepMaxes = async (user_id: number) => {
   const query = `
	DELETE FROM user_current_rm WHERE user_id = $1;
	`;
   const dbResponse = await db.none(query, user_id);
   return dbResponse;
};

const createCurrentRepMaxes = async (
   repMaxes: ExerciseTrainingMaxPostData['exerciseRepMaxes'],
   user_id: number
) => {
   db.tx((t) => {
      const queries = repMaxes.map((l) => {
         return t.none(
            'INSERT INTO user_current_rm(exercise_id, user_id, calculated_max ) VALUES((SELECT id FROM weightlifting_exercise WHERE name ~* $<l.name>), $<user_id>, $<l.max>)',
            { l, user_id }
         );
      });
      return t.batch(queries);
   })
      .then((data) => {
         // SUCCESS
         // data = array of null-s
         return data;
      })
      .catch((error) => {
         throw new Error(error);
      });
};
export {
   getUserProgram,
   deleteCurrentRepMaxes,
   getAllProgramsByCategory,
   getAllExercisesByMuscle,
   updateSelectedProgram,
   createCurrentRepMaxes,
};
