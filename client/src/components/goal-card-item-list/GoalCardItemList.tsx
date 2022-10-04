import React, { Dispatch, SetStateAction } from 'react';
import { CurrentGoals } from '../../../../types/types';
import { GoalCardItemCard } from './goal-card-item-card/GoalCardItemCard';

interface Props {
   goals: CurrentGoals;
   setGoals?: Dispatch<SetStateAction<CurrentGoals>>;
}

export const GoalCardItemList = ({ goals, setGoals }: Props) => {
   return (
      <>
         <GoalCardItemCard
            type={'Carbohydrates'}
            nutrientsTotal={goals.total_carbohydrates}
            setGoals={setGoals}
            goals={goals}
         />
         <GoalCardItemCard
            nutrientsTotal={goals.total_protein}
            type={'Protein'}
            setGoals={setGoals}
            goals={goals}
         />
         <GoalCardItemCard
            nutrientsTotal={goals.total_fat}
            type={'Fat'}
            setGoals={setGoals}
            goals={goals}
         />
      </>
   );
};
