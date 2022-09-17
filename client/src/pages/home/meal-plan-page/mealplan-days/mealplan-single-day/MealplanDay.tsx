import { AlertColor, Stack, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { MealplanItemType } from '../../../../../../../types/types';
import { MealplanItem } from '../MealplanItem';
import './MealplanDay.scss';

interface Props {
   meals: MealplanItemType[];
   setOpenAlert: Dispatch<SetStateAction<boolean>>;
   setAlertSeverity: Dispatch<SetStateAction<AlertColor>>;
   setAlertMessage: Dispatch<SetStateAction<string>>;
   setMealPlanItems: Dispatch<SetStateAction<MealplanItemType[] | []>>;
   currentDay: string;
   type: string;
}

export const MealplanDay = ({
   meals,
   setOpenAlert,
   setAlertSeverity,
   setAlertMessage,
   setMealPlanItems,
   currentDay,
   type,
}: Props) => {
   return (
      <>
         <Stack direction='column' sx={{ height: '100%', width: '100%' }}>
            <Typography variant='h3' align='center'>
               {type}
            </Typography>
            <div className='outer-container'>
               <div className='slider-container'>
                  <div id='slider'>
                     {meals.map((meal, index) => (
                        <div className='slider-card' key={index}>
                           <MealplanItem
                              type={meal.type}
                              id={meal.value.id}
                              shoppingListId={meal.id}
                              servings={meal.value.servings}
                              title={meal.value.title}
                              setOpenAlert={setOpenAlert}
                              setAlertSeverity={setAlertSeverity}
                              setAlertMessage={setAlertMessage}
                              setMealPlanItems={setMealPlanItems}
                              currentDay={currentDay}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Stack>
      </>
   );
};
