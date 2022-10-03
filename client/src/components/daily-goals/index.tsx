import { Button, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { CurrentGoals } from '../../../../types/types';
import { CaloriesCircularProgress } from '../calories-circular-progress/CaloriesCircularProgress';
import { CaloriesCircularProgressWithoutGoals } from '../calories-circular-progress/CaloriesCircularProgressWithoutGoals';
import { GoalCardItemLinearProgress } from '../goal-card-item-linear-progress/GoalCardItemLinearProgress';
import { GoalCardItemList } from '../goal-card-item-list/GoalCardItemList';
import './index.scss';

type nutrientType = {
   name: string;
   amount: number;
   percentOfDailyNeeds: number;
   unit: string;
};

interface Props {
   goals: CurrentGoals;
   nutritionSummary?: nutrientType[];
   page?: string;
   setGoals?: Dispatch<SetStateAction<CurrentGoals>>;
   handleSubmitUpdatedGoals?: (event: React.FormEvent) => Promise<void>;
}

export const DailyGoals = ({
   goals,
   nutritionSummary,
   page,
   setGoals,
   handleSubmitUpdatedGoals,
}: Props) => {
   let nutrients = ['Carbohydrates', 'Protein', 'Fat'];

   const getNutrientPercentage = (
      nutrientEaten: number,
      nutrientGoal: number
   ) => {
      return Math.floor((nutrientEaten / nutrientGoal) * 100);
   };

   let calories;
   if (nutritionSummary !== undefined && nutritionSummary.length) {
      calories = getNutrientPercentage(
         nutritionSummary[5].amount,
         goals.total_calories
      );
   }

   return (
      <>
         <div className='daily-goals'>
            {/* DIFFERENT TITLES FOR SEARCH AND MEALPLAN */}
            {page === 'mealplan' ? (
               <Typography variant='h6'>
                  Today's Macronutrient Totals
               </Typography>
            ) : (
               <Typography variant='h6'>
                  Your Daily Macronutrient Goals
               </Typography>
            )}
            {/* RENDER THE MEALPLAN SIDEBAR HERE */}
            {page === 'mealplan' &&
            nutritionSummary !== undefined &&
            nutritionSummary.length ? (
               <>
                  <CaloriesCircularProgress
                     calories={calories}
                     caloriesTotal={goals.total_calories}
                     caloriesUsed={Math.floor(nutritionSummary[5].amount)}
                  />
                  <div
                     className='daily-goals-items'
                     data-testid='mealplan-goal-items'
                  >
                     <GoalCardItemLinearProgress
                        type={'Carbohydrates'}
                        nutrientsInMealPlan={nutritionSummary[7].amount}
                        nutrientsTotal={goals.total_carbohydrates}
                     />
                     <GoalCardItemLinearProgress
                        nutrientsTotal={goals.total_protein}
                        type={'Protein'}
                        nutrientsInMealPlan={nutritionSummary[28].amount}
                     />
                     <GoalCardItemLinearProgress
                        nutrientsTotal={goals.total_fat}
                        type={'Fat'}
                        nutrientsInMealPlan={nutritionSummary[11].amount}
                     />
                  </div>
               </>
            ) : null}
            {/* RENDER THE SEARCH SIDEBAR OR USER PROFILE PAGE HERE */}
            {page === 'search' ||
            page === 'user-profile' ||
            (page === 'mealplan' &&
               goals !== undefined &&
               nutritionSummary !== undefined &&
               nutritionSummary.length === 0) ? (
               <>
                  <CaloriesCircularProgressWithoutGoals goals={goals} />
                  <form
                     onSubmit={handleSubmitUpdatedGoals}
                     className='daily-goals-items'
                  >
                     <GoalCardItemList
                        goals={goals}
                        page={page}
                        setGoals={setGoals}
                     />
                     {page === 'user-profile' ? (
                        <Button variant='contained' fullWidth type='submit'>
                           Update Goals
                        </Button>
                     ) : null}
                  </form>
               </>
            ) : null}
         </div>
      </>
   );
};
