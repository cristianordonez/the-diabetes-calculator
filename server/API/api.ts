const url = 'https://api.spoonacular.com';
import axios from 'axios';

type User = {
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

interface Account {
   status: string;
   username: string;
   spoonacularPassword: string;
   hash: string;
}

const connectUser = async function (user: User) {
   const spoonacularUser = await axios.post<Account>(
      `${url}/users/connect?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      user
   );
   return spoonacularUser;
};
interface Query {
   query: string;
   type: string;
   diet: string;
   intolerance: string;
   minCalories: number;
   maxCalories: number;
   minCarbs: number;
   maxCarbs: number;
   minProtein: number;
   maxProtein: number;
   minFat: number;
   maxFat: number;
   number: number; //number of items to return
   offset: number; //number of results to skip, useful for lazy loading
}

const getSpoonacularRecipes = async function (recipeQuery: Query) {
   //if user does not send diet or intolerance, must enter in false instead for request to function
   let dietQuery = recipeQuery.diet.length ? recipeQuery.diet : false;
   let intoleranceQuery = recipeQuery.intolerance.length
      ? recipeQuery.intolerance
      : false;

   const recipes = await axios.get(
      `${url}/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${recipeQuery.query}&type=${recipeQuery.type}&$minCalories=${recipeQuery.minCalories}&maxCalories=${recipeQuery.maxCalories}&minCarbs=${recipeQuery.minCarbs}&maxCarbs=${recipeQuery.maxCarbs}&minProtein=${recipeQuery.minProtein}&maxProtein=${recipeQuery.maxProtein}&minFat=${recipeQuery.minFat}&maxFat=${recipeQuery.maxFat}&intolerances=${intoleranceQuery}&diet=${dietQuery}&number=${recipeQuery.number}&offset=${recipeQuery.offset}`
   );
   return recipes.data.results;
};

const getSpoonacularMenuItems = async function (menuQuery: Query) {
   //does not use intolerance or diet since API does not accept those values for this request
   const menuItems = await axios.get(
      `${url}/food/menuItems/search?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${menuQuery.query}&type=${menuQuery.type}&$minCalories=${menuQuery.minCalories}&maxCalories=${menuQuery.maxCalories}&minCarbs=${menuQuery.minCarbs}&maxCarbs=${menuQuery.maxCarbs}&minProtein=${menuQuery.minProtein}&maxProtein=${menuQuery.maxProtein}&minFat=${menuQuery.minFat}&maxFat=${menuQuery.maxFat}&number=${menuQuery.number}&offset=${menuQuery.offset}&addMenuItemInformation=true`
   );
   return menuItems.data.menuItems;
};

const getSpoonacularGroceryProducts = async function (
   groceryProductsQuery: Query
) {
   //does not use type, intolerance or diet since API does not accept those values for this request
   const groceryProducts = await axios.get(
      `${url}/food/products/search?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${groceryProductsQuery.query}&$minCalories=${groceryProductsQuery.minCalories}&maxCalories=${groceryProductsQuery.maxCalories}&minCarbs=${groceryProductsQuery.minCarbs}&maxCarbs=${groceryProductsQuery.maxCarbs}&minProtein=${groceryProductsQuery.minProtein}&maxProtein=${groceryProductsQuery.maxProtein}&minFat=${groceryProductsQuery.minFat}&maxFat=${groceryProductsQuery.maxFat}&number=${groceryProductsQuery.number}&offset=${groceryProductsQuery.offset}&addProductInformation=true`
   );
   return groceryProducts.data.products;
};

export {
   connectUser,
   getSpoonacularRecipes,
   getSpoonacularMenuItems,
   getSpoonacularGroceryProducts,
};
