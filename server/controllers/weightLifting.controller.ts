import { Request, Response } from 'express';
import { getAllPrograms } from '../models/weightLifting.model';

//todo get programs from database (make sure it is only default programs being selected, not user created ones)
const getPrograms = async (req: Request, res: Response) => {
   try {
      const programs = await getAllPrograms();
      res.status(200).send(programs);
   } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'Unable to retrieve programs.' });
   }
};

//todo get list of all exercises

//todo allow user to get their selected program

//todo allow user to select program

//todo allow user to get all their upcoming workouts

//todo allow user to save workout

//todo allow user to enter their historic rep maxes after workouts are completed

export { getPrograms };
