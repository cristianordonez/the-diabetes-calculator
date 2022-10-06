import { Request, Response } from 'express';
import {
   AddToMealPlanType,
   CustomFoodInput,
   PassportGoogleUser,
   SelectedDate,
} from '../../types/types';
import { getFoodTitle } from '../../utils/getFoodTitle';
import { createFood, createFoodNutrition } from '../models/food.model';
import {
   createMeal,
   createMealNutrition,
   deleteFood,
   getByDay,
   getNutritionSummaryByDay,
} from '../models/mealplan.model';

//# adds item to users meals, then updates the user_meal_nutrition table
//# for this item in seperate query
const addMealPlanItem = async function (req: Request, res: Response) {
   try {
      const body = req.body as AddToMealPlanType;
      const user = req.user as PassportGoogleUser;
      const mealId = await createMeal(body, user.user_id);
      console.log('mealId: ', mealId);
      await createMealNutrition(mealId[0].meal_id);
      res.status(201).send('Successfully posted mealplan item');
   } catch (err) {
      console.log('error adding mealplan item', err);
      res.status(400).send('Error adding item to mealplan');
   }
};

//# gets all meals for user, then also gets object showing sum of
//# calories, carbs, protein, fat for all meal items
const getMealPlanDay = async function (req: Request, res: Response) {
   try {
      const query = req.query as SelectedDate;
      const user = req.user as PassportGoogleUser;
      const mealplanItems = await getByDay(query.date, user.user_id);
      const nutritionSummary = await getNutritionSummaryByDay(
         query.date,
         user.user_id
      );
      res.status(200).send({ mealplanItems, nutritionSummary });
   } catch (err) {
      console.log('err:', err);
      res.status(400).send('Unable to get mealplan items');
   }
};

//#deletes item from users meals, then gets updated meals and returns to user
const deleteMealPlanItem = async function (req: Request, res: Response) {
   try {
      const params = req.params as { id: string };
      const query = req.query as { currentDay: string };
      const user = req.user as PassportGoogleUser;
      console.log('params: ', params);
      console.log('query: ', query);
      await deleteFood(user.user_id, params.id);
      const updatedItems = await getByDay(query.currentDay, user.user_id);
      const updatedNutritionSummary = await getNutritionSummaryByDay(
         query.currentDay,
         user.user_id
      );
      res.status(200).send({ updatedItems, updatedNutritionSummary });
   } catch (err) {
      console.log('error deleting mealplan item: ', err);
      res.status(400).send('Unable to delete item.');
   }
};

//# adds new food to database, then adds it to users meals,
//# then returns the updated meal items for user
//# if adding foods with unit size other than grams or mL, convert to grams first and then divide by 100 to get conversion factor
const createCustomItem = async (req: Request, res: Response) => {
   try {
      const body = req.body as CustomFoodInput;
      const user = req.user as PassportGoogleUser;
      console.log('body: ', body);
      const serving_size_conversion_factor = body.serving_size / 100;
      const fdc_id = await createFood(
         body.description,
         serving_size_conversion_factor,
         body.brand_name,
         body.serving_size,
         body.serving_size_unit,
         user.user_id
      );
      console.log('fdc_id: ', fdc_id);
      await createFoodNutrition(
         body.nutrition,
         fdc_id[0].fdc_id,
         serving_size_conversion_factor
      );

      const title = getFoodTitle(body.brand_name, body.description);
      console.log('title: ', title);
      const mealItem = {
         date: body.date,
         slot: body.slot,
         data_type: body.data_type,
         fdc_id: fdc_id[0].fdc_id,
         servings: body.servings,
         serving_size: body.serving_size,
         serving_size_unit: body.serving_size_unit,
         title: title,
      };

      const mealId = await createMeal(mealItem, user.user_id);
      await createMealNutrition(mealId[0].id);
      // TODO send back updated list of items;
      res.status(200).send('Success');
   } catch (err) {
      console.log('err: ', err);
      res.status(400).send('Unable to createMeal new food');
   }
};

//TODO now add data to food table, then new table, and then food_nutrition table, then user meal, then user meal nutrition
//when adding nutrients to food_nutrition table, make sure it is amount per 100 grams only
//when adding title to mealplan item, combine brand_name and description

export {
   addMealPlanItem,
   getMealPlanDay,
   deleteMealPlanItem,
   createCustomItem,
};
