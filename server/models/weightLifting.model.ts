import { db } from '../database/db';

const getAllPrograms = async function () {
   const currentQuery = `   
select row_to_json(category) as categories
from 
(
	select c.category_name, c.id as category_id,
	(
		select json_agg(program)
		from 
		(
			select program.name, program.id as program_id, program.body, (
				select json_agg(program_progression)
				from 
				(
					select pp.description, pp.min_rep 
					from program_progression as pp
					where pp.program_id = program.id
				) program_progression
			) as progression, program.is_default,
			(
			select json_agg(workout)
		from
		(
			select workout.week,workout.day, 
			(
				select json_agg(workout_set)
				from 
				(
					select workout_set.amrap, workout_set.reps_target,
					(
						select json_agg(exercises)
						from 
						(
							select w.name as exercise, w.body_part, w.gif_url, w.equipment, muscle.name as target
							from weightlifting_exercise as w
							inner join muscle on w.muscle_id = muscle.id
							where w.id = workout_set.exercise_id
						) as exercises
					) exercises
					from workout_set where workout_set.workout_id = workout.id
				) workout_set
			) as sets
			from workout where workout.program_id = program.id
			order by week, day
		) workout
			) as workouts
			from program where c.id = program.category_id
		) program
	) as programs
	from category as c
) category;`;
   const dbResponse = await db.many(currentQuery);
   return dbResponse;
};

export { getAllPrograms };
