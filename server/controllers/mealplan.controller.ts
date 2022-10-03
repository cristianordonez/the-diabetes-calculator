import { Request, Response } from 'express';
import { AddToMealPlanType, PassportGoogleUser } from '../../types/types';

const addMealPlanItem = async function (req: Request, res: Response) {
   const body = req.body as AddToMealPlanType;
   const user = req.user as PassportGoogleUser;
   console.log('user:', user);
   console.log('body:', body);
   // let hash = await getHash(user.spoonacular_username);
   // try {
   //    const response = await addToSpoonacularMealplan(
   //       req.body,
   //       user.spoonacular_username,
   //       hash[0].spoonacular_hash
   //    );
   //    res.status(201).send(response.data.status);
   // } catch (err) {
   //    console.log(err);
   //    res.status(400).send('Error adding item to mealplan');
   // }
};

type Hash = [{ spoonacular_hash: string }];

const getMealPlanDay = async function (req: Request, res: Response) {
   // const mealplanDay = req.query as SelectedDate;
   // const user = req.user as User;
   // try {
   //    let hash = await getHash(user.spoonacular_username); //returns Hash type
   //    let mealplanDayItems = await getFromSpoonacularMealplanDay(
   //       user.spoonacular_username,
   //       mealplanDay.date,
   //       hash[0].spoonacular_hash
   //    );
   //    res.status(200).send(mealplanDayItems);
   // } catch (err: any) {
   //    if (err.response.data.message === 'No meals planned for that day') {
   //       res.status(400).send(err.response.data.message);
   //    } else {
   //       res.status(400).send('Bad Request.');
   //    }
   // }
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
