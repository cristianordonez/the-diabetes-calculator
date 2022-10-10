import React from 'react';
import { MealplanItem } from '../../../../../../types/types';
import { SampleMealplanSlot } from './sample-mealplan-slot/SampleMealplanSlot';
import './SampleMealplanDay.scss';

interface Props {
   randomMealplanItems: MealplanItem[];
}
export const SampleMealPlanDay = ({ randomMealplanItems }: Props) => {
   const slotNames = ['Morning', 'Afternoon', 'Evening', 'Snack'];
   return (
      <>
         <div className='meal-plan-slots-container'>
            {randomMealplanItems.map((randomMealplanItem, index) => (
               <SampleMealplanSlot
                  slotName={slotNames[index]}
                  mealItem={randomMealplanItem}
               />
            ))}
         </div>
      </>
   );
};
