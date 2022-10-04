import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Card, CardContent, Typography } from '@mui/material';
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

export const GoalCardItemCard = ({
   nutrientsTotal,
   type,
   setGoals,
   goals,
}: Props): ReactJSXElement => {
   const [colorMode, setColorMode] = useLocalStorageState('mode', 'dark');

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

               <Typography align='center' variant='h6'>
                  {nutrientsTotal} g
               </Typography>
            </CardContent>
         </Card>
      </>
   );
};
