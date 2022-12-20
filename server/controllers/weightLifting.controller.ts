import { Request, Response } from 'express';
import {
   create,
   getAllExercisesByMuscle,
   getAllProgramsByCategory,
} from '../models/weightLifting.model';

//get programs from database (make sure it is only default programs being selected, not user created ones)
const getInitWeightLiftingData = async (req: Request, res: Response) => {
   try {
      const categories = await getAllProgramsByCategory();
      const muscles = await getAllExercisesByMuscle();
      res.status(200).send({ categories, muscles });
   } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'Unable to retrieve programs.' });
   }
};

//todo allow user to get their selected program
const createUserProgram = async (req: Request, res: Response) => {
   try {
      await create(req.body);
   } catch (err) {
      console.error(err);
      res.status(400).send({
         message: 'Unable to create program',
         status: 400,
      });
   }
};
//todo allow user to select/begin program

//todo allow user to get all their upcoming workouts

//todo allow user to save workout

//todo allow user to enter their historic rep maxes after workouts are completed

export { getInitWeightLiftingData, createUserProgram };
