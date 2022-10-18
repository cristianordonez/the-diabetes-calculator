interface Food {
   data_type: string;
   serving_size: number | string;
   serving_size_unit: string;
   date: string | Date;
   slot: 1 | 2 | 3 | 4;
   servings: number | string;
   brand_owner: string;
   description: string;
}

type FdcId = {
   fdc_id: number;
};
type MealId = {
   meal_id: number;
};

type ItemNutrition = {
   nutrition: FoodNutrition;
};

type AddToFoodLogType = Food & FdcId;

type FoodLogItem = AddToFoodLogType & MealId & ItemNutrition;

type CustomFoodInput = Food & ItemNutrition;

type FoodSearchResult = {
   data_type: string;
   nutrition: FoodNutrition;
   serving_size: number | null;
   serving_size_unit: string | null;
   brand_owner: string | null;
   custom_food_brand_owner: string | null;
   description: string;
   fdc_id: string;
   custom_food_serving_size: number | null;
   custom_food_serving_size_unit: string | null;
   gram_weight: number | null;
   modifier: string | null;
};

type CurrentGoals = {
   user_id?: number;
   goal: 'weight_loss' | 'gain_muscle' | 'maintain';
   total_calories: number;
   total_carbohydrates: number;
   total_protein: number;
   total_fat: number;
};

type Session = {
   user_id: string | number;
   passport: { user: string | number };
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
   height: any;
   activityLevel: number;
};

type FoodNutrition = {
   calories: number | string | null;
   calcium: number | string | null;
   cholesterol: number | string | null;
   dietary_fiber: number | string | null;
   iron: number | string | null;
   potassium: number | string | null;
   protein: number | string | null;
   saturated_fat: number | string | null;
   monounsaturated_fat: number | string | null;
   polyunsaturated_fat: number | string | null;
   sodium: number | string | null;
   sugar: number | string | null;
   total_carbohydrates: number | string | null;
   total_fat: number | string | null;
   trans_fat: number | string | null;
   vitamin_a: number | string | null;
   vitamin_c: number | string | null;
   vitamin_d: number | string | null;
};

type NutritionSummaryFoodLog = {
   total_calories: string;
   total_carbohydrates: string;
   total_fat: string;
   total_protein: string;
};

export {
   CurrentGoals,
   Session,
   Query,
   UserType,
   AddToFoodLogType,
   Intolerances,
   SelectedDate,
   RequestParams,
   PassportGoogleUser,
   FoodSearchResult,
   FoodNutrition,
   NutritionSummaryFoodLog,
   MetricsType,
   FoodLogItem,
   CustomFoodInput,
};
