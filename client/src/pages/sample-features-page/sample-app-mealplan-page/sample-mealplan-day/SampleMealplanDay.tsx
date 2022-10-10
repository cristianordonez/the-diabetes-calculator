import React from 'react';
import { RandomMealplanItem } from '../../../../../../types/types';
import { SampleMealplanSlot } from './sample-mealplan-slot/SampleMealplanSlot';
import './SampleMealplanDay.scss';

interface Props {
   randomMealplanItems: RandomMealplanItem[];
}
export const SampleMealPlanDay = ({ randomMealplanItems }: Props) => {
   const slotNames = ['Breakfast', 'Lunch', 'Dinner'];
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
