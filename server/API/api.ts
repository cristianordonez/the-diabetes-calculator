import axios from 'axios';
import { Query, User, Account } from './types';

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/';
const X_RAPIDAPI_KEY = process.env.X_RAPIDAPI_KEY;
const X_RAPIDAPI_HOST = process.env.X_RAPIDAPI_HOST;

export const connectUser = async (user: User) => {
   const spoonacularUser = await axios.post<Account>(
      `${url}/users/connect`,
      user,
      {
         headers: {
            'X-RapidAPI-Key': `${X_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': `${X_RAPIDAPI_HOST}`,
         },
      }
   );
   return spoonacularUser;
};

export const getSpoonacularRecipes = async (
   recipeQuery: Query
): Promise<object> => {
   //if user does not send diet or intolerance, must enter in false instead for request to function
   // const options = {
   //    method: 'GET',
   //    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',

   // };
   let intoleranceQuery = recipeQuery.intolerance.length
      ? recipeQuery.intolerance
      : false;

   let recipes = await axios.get(`${url}recipes/complexSearch`, {
      params: {
         query: `${recipeQuery.query}`,
         intolerances: `${intoleranceQuery}`,
         type: `${recipeQuery.type}`,
         instructionsRequired: 'true',
         addRecipeInformation: 'true',
         sort: 'calories',
         sortDirection: 'asc',
         minCarbs: `${recipeQuery.minCarbs}`,
         maxCarbs: `${recipeQuery.maxCarbs}`,
         minProtein: `${recipeQuery.minProtein}`,
         maxProtein: ` ${recipeQuery.maxProtein}`,
         minCalories: `${recipeQuery.minCalories}`,
         maxCalories: `${recipeQuery.maxCalories}`,
         minFat: `${recipeQuery.minFat}`,
         maxFat: `${recipeQuery.maxFat}`,
         offset: `${recipeQuery.offset}`,
         number: `${recipeQuery.number}`,
      },
      headers: {
         'X-RapidAPI-Key': `${X_RAPIDAPI_KEY}`,
         'X-RapidAPI-Host': `${X_RAPIDAPI_HOST}`,
      },
   });
   return recipes.data.results;
};

export const getSpoonacularMenuItems = async (menuQuery: Query) => {
   //does not use intolerance or diet since API does not accept those values for this request
   const menuItems = await axios.get(`${url}food/menuItems/search`, {
      params: {
         query: `${menuQuery.query}`,
         type: `${menuQuery.type}`,
         addMenuItemInformation: 'true',
         sort: 'calories',
         sortDirection: 'asc',
         minCarbs: `${menuQuery.minCarbs}`,
         maxCarbs: `${menuQuery.maxCarbs}`,
         minProtein: `${menuQuery.minProtein}`,
         maxProtein: ` ${menuQuery.maxProtein}`,
         minCalories: `${menuQuery.minCalories}`,
         maxCalories: `${menuQuery.maxCalories}`,
         minFat: `${menuQuery.minFat}`,
         maxFat: `${menuQuery.maxFat}`,
         offset: `${menuQuery.offset}`,
         number: `${menuQuery.number}`,
      },
      headers: {
         'X-RapidAPI-Key': `${X_RAPIDAPI_KEY}`,
         'X-RapidAPI-Host': `${X_RAPIDAPI_HOST}`,
      },
   });
   console.log('menuItems:', menuItems);
   return menuItems.data.menuItems;
};

export const getSpoonacularGroceryProducts = async (
   groceryProductsQuery: Query
) => {
   //does not use type, intolerance or diet since API does not accept those values for this request
   const groceryProducts = await axios.get(`${url}food/products/search`, {
      params: {
         query: `${groceryProductsQuery.query}`,
         type: `${groceryProductsQuery.type}`,
         addProductInformation: 'true',
         sort: 'calories',
         sortDirection: 'asc',
         maxCarbs: `${groceryProductsQuery.maxCarbs}`,
         minCarbs: `${groceryProductsQuery.minCarbs}`,
         minProtein: `${groceryProductsQuery.minProtein}`,
         maxProtein: ` ${groceryProductsQuery.maxProtein}`,
         minCalories: `${groceryProductsQuery.minCalories}`,
         maxCalories: `${groceryProductsQuery.maxCalories}`,
         minFat: `${groceryProductsQuery.minFat}`,
         maxFat: `${groceryProductsQuery.maxFat}`,
         offset: `${groceryProductsQuery.offset}`,
         number: `${groceryProductsQuery.number}`,
      },
      headers: {
         'X-RapidAPI-Key': `${X_RAPIDAPI_KEY}`,
         'X-RapidAPI-Host': `${X_RAPIDAPI_HOST}`,
      },
   });
   console.log('groceryProducts:', groceryProducts);
   return groceryProducts.data.products;
};

interface MealPlanItem {
   date: number;
   slot: number;
   position: number;
   type: string;
   value: {
      id: number;
      servings: number;
      title: string;
      imageType: string;
   };
}
export const addToSpoonacularMealplan = async () => {};
export const deleteFromSpoonacularMealplan = async () => {};
export const getFromSpoonacularMealplanDay = async () => {};
export const getFromSpoonacularMealplanWeek = async () => {};
