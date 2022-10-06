type CurrentGoals = {
   user_id?: number;
   goal: 'weight_loss' | 'gain_muscle' | 'maintain';
   total_calories: number;
   total_carbohydrates: number;
   total_protein: number;
   total_fat: number;
};

type Session = {
   user_id: string;
   passport: { user: string };
   username: string;
};

type Query = {
   query: string;
   category: string;
   allergy: string;
   minCalories: number | string;
   maxCalories: number | string;
   minCarbs: number | string;
   maxCarbs: number | string;
   minProtein: number | string;
   maxProtein: number | string;
   minFat: number | string;
   maxFat: number | string;
   number: number; //number of items to return
   offset: number; //number of results to skip, useful for lazy loading
};

type UserType = {
   username: string;
   email: string;
   password: string;
};

type PassportGoogleUser = {
   username: string;
   email: string;
   user_id: number;
};

type AddToMealPlanType = {
   date: Date | string;
   slot: 1 | 2 | 3 | 4;
   data_type: string;
   fdc_id: number;
   servings: number | string;
   serving_size: number;
   serving_size_unit: string;
   title: string;
};

type Intolerances = {
   user_id: number;
   intolerances: string;
};

type SelectedDate = {
   date: string;
};

type RequestParams = {
   id: number;
};

type MetricsType = {
   age: number;
   goal: 'weight_loss' | 'gain_muscle' | 'maintain';
   weight: number;
   gender: string;
   height: number;
   activityLevel: number;
};

type FoodNutrition = {
   calories: number | string;
   calcium: number | string;
   cholesterol: number | string;
   dietary_fiber: number | string;
   iron: number | string;
   potassium: number | string;
   protein: number | string;
   saturated_fat: number | string;
   monounsaturated_fat: number | string;
   polyunsaturated_fat: number | string;
   sodium: number | string;
   sugar: number | string;
   total_carbohydrates: number | string;
   total_fat: number | string;
   trans_fat: number | string;
   vitamin_a: number | string;
   vitamin_c: number | string;
   vitamin_d: number | string;
};

type FoodSearchResult = {
   brand_name: string | null;
   brand_owner: string | null;
   branded_food_category: string | null;
   ingredients: string;
   description: string;
   fdc_id: string;
   serving_size: number;
   serving_size_unit: string;
   data_type: string;
   nutrition: FoodNutrition;
};

type CustomFoodInput = {
   date: string;
   slot: 1 | 2 | 3 | 4;
   data_type: string;
   servings: number;
   brand_name: string;
   description: string;
   serving_size: number;
   serving_size_unit: string;
   nutrition: FoodNutrition;
};

type NutritionSummaryMealplan = {
   total_calories: string;
   total_carbohydrates: string;
   total_fat: string;
   total_protein: string;
};

type MealplanItem = {
   data_type: string;
   date: string;
   fdc_id: string;
   ingredients: string;
   nutrition: FoodNutrition;
   serving_size: number;
   serving_size_unit: string;
   meal_id: number;
   servings: number;
   slot: 1 | 2 | 3 | 4;
   title: string;
};

export {
   CurrentGoals,
   Session,
   Query,
   UserType,
   AddToMealPlanType,
   Intolerances,
   SelectedDate,
   RequestParams,
   PassportGoogleUser,
   FoodSearchResult,
   FoodNutrition,
   NutritionSummaryMealplan,
   MetricsType,
   MealplanItem,
   CustomFoodInput,
};
