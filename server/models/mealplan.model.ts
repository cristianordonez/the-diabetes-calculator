import { AddToMealPlanType } from '../../types/types';
import { db } from '../database/db';

const create = (mealplan: AddToMealPlanType, user_id: number) => {
   const dbQuery = `INSERT INTO user_meal (user_id, fdc_id, date, slot, position, 
data_type, servings, serving_size, serving_size_unit)
VALUES (${user_id}, ${mealplan.fdc_id}, '${mealplan.date}',
 ${mealplan.slot}, '${mealplan.data_type}',
 ${mealplan.servings}, ${mealplan.serving_size}, '${mealplan.serving_size_unit}')`;
   const results = db.query(dbQuery);
   return results;
};

const getByDay = (date: Date | string) => {};
export { create, getByDay };
