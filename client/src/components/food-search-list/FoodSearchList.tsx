import React from 'react';
import FoodSearchItem from './food-search-item/FoodSearchItem';

type Nutrients = {
   nutrients: [];
};

type GroceryNutrients = {
   calories: number;
   carbs: string;
   fat: string;
   protein: string;
};

type RecipeItem = {
   id: number;
   image: string;
   nutrition: Nutrients;
   title: string;
   sourceUrl: string;
   servings: number;
};

type GroceryItem = {
   id: number;
   aisle: string;
   importantBadges: string[];
   brand: string;
   description: string;
   image: string;
   title: string;
   nutrition: GroceryNutrients;
   price: number;
   ingredientList: string;
};

const FoodSearchList = ({ apiData, route }: any) => {
   console.log('apiData:', apiData);

   return (
      <>
         {route === 'recipes' &&
            apiData.map((item: RecipeItem) => (
               <FoodSearchItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  nutrition={item.nutrition.nutrients}
                  route={route}
               />
            ))}
         {route === 'groceryProducts' &&
            apiData.map((item: GroceryItem) => (
               <FoodSearchItem
                  key={item.id}
                  description={item.description}
                  image={item.image}
                  title={item.title}
                  nutrition={item.nutrition}
                  price={item.price}
                  ingredientList={item.ingredientList}
                  route={route}
               />
            ))}
         {route === 'menuItems' &&
            apiData.map((item: RecipeItem) => (
               <FoodSearchItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  nutrition={item.nutrition.nutrients}
                  route={route}
               />
            ))}
      </>
   );
};

export default FoodSearchList;
