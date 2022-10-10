import { AlertColor, CircularProgress, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import subDays from 'date-fns/subDays';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MealplanItem } from '../../../../../types/types';
import { MealPlanWeekText } from '../../../components/mealplan-week-text/MealPlanWeekText';
import { SampleMealPlanDay } from './sample-mealplan-day/SampleMealplanDay';
import './SampleMealPlanPage.scss';

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

const daysMobile = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

interface Props {
   setNutritionSummary: Dispatch<SetStateAction<any>>;
   setAlertSeverity: Dispatch<SetStateAction<AlertColor>>;
   setOpenAlert: Dispatch<SetStateAction<boolean>>;
   setRandomMealplanItems: Dispatch<SetStateAction<MealplanItem[]>>;
   setAlertMessage: Dispatch<SetStateAction<string>>;
   randomMealplanItems: MealplanItem[];
}

const SampleMealPlanPage = ({
   setNutritionSummary,
   setAlertSeverity,
   setOpenAlert,
   setRandomMealplanItems,
   randomMealplanItems,
   setAlertMessage,
}: Props) => {
   const [dayIndex, setDayIndex] = useState<number>(getDay(Date.now())); //used for tab highlighting

   const [value, setValue] = React.useState<any>(new Date(Date.now()));

   const [currentDay, setCurrentDay] = useState(
      format(new Date(Date.now()), 'yyyy-MM-dd')
   );

   const handleClose = (event: React.SyntheticEvent | Event) => {
      setOpenAlert(false);
   };

   //need to configure so that day is also changed when tab changes
   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      const prevDate = currentDay; //create variable to store the previous date and previous tab index
      const prevDayIndex = dayIndex;
      let differenceInDays = newValue - dayIndex; //find out how many days before or after current date is new selected date by finding difference between previous tab and current tab
      let newDate: Date | number | undefined;
      let { year, month, day } = getFormattedDay(currentDay);
      if (differenceInDays > 0) {
         //then update current date by adding or subtracting correct number of days
         newDate = addDays(
            new Date(`${year}, ${month}, ${day}`),
            differenceInDays
         );
      } else if (differenceInDays < 0) {
         newDate = subDays(
            new Date(`${year}, ${month}, ${day}`),
            Math.abs(differenceInDays)
         );
      }
      if (newDate !== undefined) {
         setValue(newDate); //updates the date textfield value
         setDayIndex(newValue);
         setCurrentDay(format(newDate, 'yyyy-MM-dd'));
      }
   };

   const getFormattedDay = (date: string) => {
      let dates = date.split('-');
      let year = dates[0];
      let month = dates[1];
      let day = dates[2];
      return { year, month, day };
   };

   useEffect(() => {
      axios
         .get('/api/mealplan/random')
         .then((response) => {
            setNutritionSummary(response.data.nutritionSummary[0]);
            setRandomMealplanItems(response.data.randomItems);
         })
         .catch((err) => {
            setAlertMessage(
               'Unable to retrieve meal plan items. Please try again later.'
            );
            setAlertSeverity('error');
            setOpenAlert(true);
         });
   }, [currentDay]);

   console.log('sampleMealplanItems: ', randomMealplanItems);
   return (
      <>
         <div className='sample-mealplan-page'>
            <MealPlanWeekText currentDay={currentDay} />
            <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
               <Tabs
                  value={dayIndex}
                  onChange={handleTabChange}
                  variant='scrollable'
                  scrollButtons='auto'
                  aria-label='change mealplan date'
               >
                  {days.map((day) => (
                     <Tab key={day} label={day} />
                  ))}
               </Tabs>
            </Box>
            {randomMealplanItems.length > 0 ? (
               <SampleMealPlanDay randomMealplanItems={randomMealplanItems} />
            ) : (
               <CircularProgress size={100} />
            )}
         </div>
      </>
   );
};

export default SampleMealPlanPage;
