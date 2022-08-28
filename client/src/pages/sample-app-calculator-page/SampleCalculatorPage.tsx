import React, { useState } from 'react';
import './SampleCalculatorPage.scss';
import { Calculator } from '../../components/calculator-contents/Calculator';
import { Goals } from '../../helper-functions/get-metrics/getMetrics';
import { GoalsType } from '../../../types/types';
import NavBar from '../../components/navbar/NavBar';
import { GoalCardItemList } from '../../components/daily-goals/goal-card-item-list/GoalCardItemList';
import { CustomAlert } from '../../components/custom-alert/CustomAlert';
import { AlertColor, Paper, Button, Stack, Typography } from '@mui/material';
import { getMetrics } from '../../helper-functions/get-metrics/getMetrics';

const SampleCalculatorPage = () => {
   const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success');
   const [openAlert, setOpenAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState(''); //message displayed on snackbar
   const [showNextPage, setShowNextPage] = useState<boolean>(false);
   const [showSignup, setShowSignup] = useState<boolean>(false);
   const handleAlert = () => {
      setOpenAlert(!openAlert);
   };
   const [activityLevel, setActivityLevel] = useState<number>(1);
   const [gender, setGender] = useState('male');
   const [age, setAge] = useState<any>(18);
   const [height, setHeight] = useState<any>(60);
   const [weight, setWeight] = useState<any>(200);
   const [goals, setGoals] = useState<Goals>({
      total_carbohydrates: 0,
      min_carbs_per_meal: 0,
      max_carbs_per_meal: 0,
      total_protein: 0,
      min_protein_per_meal: 0,
      max_protein_per_meal: 0,
      total_fat: 0,
      min_fat_per_meal: 0,
      max_fat_per_meal: 0,
      total_calories: 0,
      min_calories_per_meal: 0,
      max_calories_per_meal: 0,
   });

   const handleGenderChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string
   ) => {
      setGender(newAlignment);
   };

   //ACTIVITY LEVEL HANDLERS
   const handleActivityLevelChange = (
      event: React.MouseEvent<HTMLElement>,
      newActivityLevel: number
   ) => {
      setActivityLevel(newActivityLevel);
   };

   //todo after submit show the results of calculations
   const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      const currentGoals = getMetrics({
         gender,
         age,
         height,
         weight,
         activityLevel,
      });
      setGoals(currentGoals);
   };
   return (
      <>
         <NavBar />

         <Stack
            direction='column'
            alignItems='center'
            justifyContent={'center'}
            sx={{ pt: '2rem' }}
            spacing={2}
         >
            <Typography variant='h2'>MacroCalculator</Typography>
            <Paper
               elevation={1}
               className='calculator-page'
               component='form'
               onSubmit={handleSubmit}
            >
               <Typography variant='body1'>
                  Enter your personal metrics below to determine your
                  recommended calorie and macronutrient ranges
               </Typography>
               <Calculator
                  handleGenderChange={handleGenderChange}
                  gender={gender}
                  activityLevel={activityLevel}
                  handleActivityLevelChange={handleActivityLevelChange}
                  age={age}
                  setAge={setAge}
                  height={height}
                  setHeight={setHeight}
                  weight={weight}
                  setWeight={setWeight}
               />
               <Button fullWidth type='submit' variant='contained'>
                  Calculate
               </Button>
            </Paper>
            <CustomAlert
               openAlert={openAlert}
               handleAlert={handleAlert}
               alertSeverity={alertSeverity}
               alertMessage={alertMessage}
            />
            {goals !== undefined ? (
               <>
                  <Typography variant='h3'>Goals</Typography>
                  <div className='goal-card-items'>
                     <GoalCardItemList goals={goals} page={'mealplan'} />
                  </div>
               </>
            ) : null}
         </Stack>
      </>
   );
};

export default SampleCalculatorPage;
