import React, { useEffect, useState } from 'react';
import './SampleMealPlanPage.scss';
import NavBar from '../../components/navbar/NavBar';
import { SampleMealPlanDay } from './sample-mealplan-day/SampleMealplanDay';
import { SampleMealplanSidebar } from './sample-mealplan-sidebar';
import { CustomAlert } from '../../components/custom-alert/CustomAlert';
import { MealPlanWeekText } from '../../components/mealplan-week-text/MealPlanWeekText';
import {
   AlertColor,
   Tabs,
   Tab,
   Toolbar,
   IconButton,
   CircularProgress,
} from '@mui/material';
import { SampleMealplanItem, FoodItemType } from '../../../../types/types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import getDay from 'date-fns/getDay';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import format from 'date-fns/format';
import axios from 'axios';

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

const SampleMealPlanPage = () => {
   const [dayIndex, setDayIndex] = useState<number>(getDay(Date.now())); //used for tab highlighting
   const [mealplanItems, setMealplanItems] = useState<FoodItemType[] | []>([]);
   const [sampleMealplanItems, setSampleMealplanItems] = useState<
      SampleMealplanItem[] | []
   >([]);
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
   const [alertSeverity, setAlertSeverity] = useState<AlertColor>('error');
   const [alertMessage, setAlertMessage] = useState<string>('');

   const [value, setValue] = React.useState<any>(new Date(Date.now()));
   const [nutritionSummary, setNutritionSummary] = useState({
      calories: 0,
      fat: 0,
      carbohydrates: 0,
      protein: 0,
   });

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const [currentDay, setCurrentDay] = useState(
      format(new Date(Date.now()), 'yyyy-MM-dd')
   ); //spoonacular api needs date in format '2022-07-13'

   const handleClose = (event: React.SyntheticEvent | Event) => {
      setOpenSnackbar(false);
   };

   //need to configure so that day is also changed when tab changes
   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      setMealplanItems([]); //when tab changes, reset the nutrition summary and the mealplan items
      setNutritionSummary({
         calories: 0,
         protein: 0,
         fat: 0,
         carbohydrates: 0,
      });
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
         .get('/api/mealplan/sample')
         .then((response) => {
            setNutritionSummary(response.data.nutrients);
            console.log('response:', response);
            const currentMealplanItems = response.data.meals;
            setSampleMealplanItems(currentMealplanItems);
            const promises = currentMealplanItems.map(
               (item: SampleMealplanItem) => {
                  return axios
                     .get(`/api/recipes/${item.id}`)
                     .then((response) => {
                        return response.data;
                     });
               }
            );
            Promise.all(promises).then((mealItems) => {
               setMealplanItems(mealItems);
            });
         })
         .catch((err) => {
            console.log('err:', err);
         });
   }, [currentDay]);

   const sampleGoals = {
      total_carbohydrates: 135,
      min_carbs_per_meal: 45,
      max_carbs_per_meal: 55,
      total_protein: 135,
      min_protein_per_meal: 30,
      max_protein_per_meal: 50,
      total_fat: 100,
      min_fat_per_meal: 25,
      max_fat_per_meal: 45,
      total_calories: 2000,
      min_calories_per_meal: 450,
      max_calories_per_meal: 650,
   };

   return (
      <>
         <NavBar />
         <SampleMealplanSidebar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            nutritionSummary={nutritionSummary}
            goals={sampleGoals}
         />
         <Toolbar sx={{ display: { sm: 'none' } }}>
            <IconButton
               color='inherit'
               aria-label='open drawer'
               edge='start'
               onClick={handleDrawerToggle}
               sx={{ mr: 2, display: { sm: 'none' } }}
            >
               <ArrowForwardIosIcon />
            </IconButton>
         </Toolbar>
         <div className='sample-mealplan-page'>
            <MealPlanWeekText currentDay={currentDay} />
            <Tabs value={dayIndex} onChange={handleTabChange}>
               {days.map((day) => (
                  <Tab key={day} label={day} />
               ))}
            </Tabs>
            {mealplanItems.length > 0 && sampleMealplanItems.length > 0 ? (
               <SampleMealPlanDay
                  mealplanItems={mealplanItems}
                  sampleMealplanItems={sampleMealplanItems}
               />
            ) : (
               <CircularProgress size={100} />
            )}
         </div>
         <CustomAlert
            openAlert={openSnackbar}
            handleAlert={handleClose}
            alertSeverity={alertSeverity}
            alertMessage={alertMessage}
         />
      </>
   );
};

export default SampleMealPlanPage;
