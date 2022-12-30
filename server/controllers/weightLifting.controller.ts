import { Request, Response } from 'express';
import { ExerciseTrainingMaxPostData, Session } from '../../types/types';
import {
   createCurrentRepMaxes,
   deleteCurrentRepMaxes,
   getAllExercisesByMuscle,
   getAllProgramsByCategory,
   getUserProgram,
   updateSelectedProgram,
} from '../models/weightLifting.model';

//get programs from database (make sure it is only default programs being selected, not user created ones)
const getInitWeightLiftingData = async (req: Request, res: Response) => {
   const session = req.session as unknown as Session;
   try {
      const categories = await getAllProgramsByCategory();
      const muscles = await getAllExercisesByMuscle();
      const selectedProgram = await getUserProgram(session.user_id);
      res.status(200).send({ categories, muscles, selectedProgram });
   } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'Unable to retrieve programs.' });
   }
};

//allow user to save their selected program
const saveUserProgram = async (req: Request, res: Response) => {
   const session = req.session as unknown as Session;
   const body = req.body as unknown as ExerciseTrainingMaxPostData;
   try {
      await updateSelectedProgram(
         body.activeProgramId,
         Number(session.user_id)
      );
      await deleteCurrentRepMaxes(Number(session.user_id));
      await createCurrentRepMaxes(
         body.exerciseRepMaxes,
         Number(session.user_id)
      );
      res.status(200).send({
         message: 'Program has been updated successfully.',
         status: 200,
      });
   } catch (err) {
      console.error(err);
      res.status(400).send({
         message: 'Unable to save program to your account.',
         status: 400,
      });
   }
};

//todo allow user to save a completed workout

//todo allow user to enter their historic rep maxes after workouts are completed

export { getInitWeightLiftingData, saveUserProgram };
