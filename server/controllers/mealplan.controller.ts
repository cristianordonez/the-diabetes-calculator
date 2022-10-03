import { Request, Response } from 'express';
import {
   AddToMealPlanType,
   PassportGoogleUser,
   SelectedDate,
} from '../../types/types';
import { create, getByDay } from '../models/mealplan.model';

const addMealPlanItem = async function (req: Request, res: Response) {
   try {
      const body = req.body as AddToMealPlanType;
      const user = req.user as PassportGoogleUser;
      const dbResponse = await create(body, user.id);
      res.status(201).send('Successfully posted mealplan item');
   } catch (err) {
      console.log(err);
      res.status(400).send('Error adding item to mealplan');
   }
};

type Hash = [{ spoonacular_hash: string }];

const getMealPlanDay = async function (req: Request, res: Response) {
   try {
      const query = req.query as SelectedDate;
      const user = req.user as PassportGoogleUser;
      const mealplanDayItems = await getByDay(query.date);
      res.status(200).send(mealplanDayItems);
   } catch (err) {
      console.log('err:', err);
   }
};

//gets all meal plans for a selected week
const getMealPlanWeek = async function (req: Request, res: Response) {
   // const mealplanWeek = req.query as SelectedDate;
   // const user = req.user as User;
   // try {
   //    let hash = await getHash(user.spoonacular_username); //returns Hash type
   //    let mealplanWeekItems = await getFromSpoonacularMealplanWeek(
   //       user.spoonacular_username,
   //       mealplanWeek.date,
   //       hash[0].spoonacular_hash
   //    );
   //    res.status(200).send('Successfully deleted mealplan item.');
   // } catch (err) {
   //    console.log(err);
   //    res.status(400).send('No meal plan items found.');
   // }
};

const deleteMealPlanItem = async function (req: Request, res: Response) {
   // const id = req.params.id;
   // const user = req.user as User;
   // try {
   //    let hash = await getHash(user.spoonacular_username); //returns Hash type
   //    let successResponse = await deleteFromSpoonacularMealplan(
   //       user.spoonacular_username,
   //       id,
   //       hash[0].spoonacular_hash
   //    );
   //    res.status(200).send('Item has been deleted.');
   // } catch (err) {
   //    res.status(400).send('Unable to delete item.');
   //    console.log(err);
   // }
};

export { addMealPlanItem, getMealPlanDay, getMealPlanWeek, deleteMealPlanItem };
