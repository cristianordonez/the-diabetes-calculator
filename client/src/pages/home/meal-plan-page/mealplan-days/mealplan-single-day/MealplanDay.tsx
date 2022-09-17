import { AlertColor, Button, Paper, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate();
   return (
      <>
         <Paper
            elevation={2}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               height: '100%',
               width: '100%',
               p: '0.5rem',
            }}
         >
            <Typography variant='h5' align='left'>
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
            <Button
               fullWidth
               variant='text'
               sx={{ justifyContent: 'flex-start' }}
               onClick={() => navigate('/home/search')}
            >
               <Typography align='left' variant='overline'>
                  Add Food
               </Typography>
            </Button>
         </Paper>
      </>
   );
};
