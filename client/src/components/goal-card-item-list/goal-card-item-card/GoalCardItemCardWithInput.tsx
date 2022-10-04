import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Card, CardContent, Input, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { CurrentGoals } from '../../../../../types/types';
import { useLocalStorageState } from '../../../hooks/useLocalStorage';
import './GoalCardItemCard.scss';

interface Props {
   type: 'Carbohydrates' | 'Protein' | 'Fat';
   nutrientsTotal: number;
   setGoals?: Dispatch<SetStateAction<CurrentGoals>>;
   goals: CurrentGoals;
}

export const GoalCardItemCardWithInput = ({
   nutrientsTotal,
   type,
   setGoals,
   goals,
}: Props): ReactJSXElement => {
   const [colorMode, setColorMode] = useLocalStorageState('mode', 'dark');

   //takes in total macronutrient amount entered and also changes associated min and max amounts
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setGoals !== undefined) {
         if (event.target.id === 'Carbohydrates') {
            let totalCarbs = parseInt(event.target.value);
            setGoals({
               ...goals,
               total_carbohydrates: totalCarbs,
            });
         } else if (event.target.id == 'Protein') {
            let totalProtein = parseInt(event.target.value);
            setGoals({
               ...goals,
               total_protein: totalProtein,
            });
         } else if (event.target.id === 'Fat') {
            let totalFat = parseInt(event.target.value);
            setGoals({
               ...goals,
               total_fat: totalFat,
            });
         }
      }
   };

   return (
      <>
         <Card sx={{ borderRadius: '15%' }} elevation={5}>
            <CardContent
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '10rem',
                  width: '10rem',
                  aligItems: 'center',
                  gap: '1rem',
                  justifyContent: 'center',
               }}
            >
               <Typography
                  className='nutrient-type-text'
                  align='center'
                  variant='body1'
                  component='div'
               >
                  {type}
               </Typography>
               <Input
                  value={`${nutrientsTotal}`}
                  type='number'
                  endAdornment={'g'}
                  fullWidth
                  onInput={handleChange}
                  id={type}
                  required
                  inputProps={{ style: { textAlign: 'center' } }}
               />
            </CardContent>
         </Card>
      </>
   );
};
