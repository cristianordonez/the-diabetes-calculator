import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
   AlertColor,
   IconButton,
   SelectChangeEvent,
   Toolbar,
   Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import {
   CurrentGoals,
   MealplanItem,
   NutritionSummaryMealplan,
   Query,
} from '../../../../types/types';
import { CustomAlert } from '../../components/custom-alert/CustomAlert';
import { getMetrics } from '../../utils/get-metrics/getMetrics';
import SampleMealPlanPage from './sample-app-mealplan-page/SampleMealPlanPage';
import { SampleFeaturesSidebar } from './sample-features-sidebars';
import './SampleFeaturesPage.scss';

const initialState = {
   query: '',
   brand_name: '',
   category: 'All',
   allergy: '',
   minCalories: '',
   maxCalories: '',
   minProtein: '',
   maxProtein: '',
   minCarbs: '',
   maxCarbs: '',
   minFat: '',
   maxFat: '',
   offset: 0,
   number: 10,
};

const initialGoals = {
   total_carbohydrates: 0,
   total_protein: 0,
   total_fat: 0,
   total_calories: 0,
   goal: 'weight_loss' as 'weight_loss' | 'maintain' | 'gain_muscle',
};

const initialMealplanGoals = {
   total_carbohydrates: 250,
   total_protein: 100,
   total_fat: 75,
   total_calories: 2075,
   goal: 'weight_loss' as 'weight_loss' | 'maintain' | 'gain_muscle',
};

const initialNutritionSummary = {
   total_calories: '0',
   total_fat: '0',
   total_carbohydrates: '0',
   total_protein: '0',
};

const SampleFeaturesPage = () => {
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [goals, setGoals] = useState<CurrentGoals>(initialGoals);
   const [mealPlanGoals, setMealplanGoals] =
      useState<CurrentGoals>(initialMealplanGoals);
   const [alertSeverity, setAlertSeverity] = useState<AlertColor>('error');
   const [alertMessage, setAlertMessage] = useState<string>('');
   const [values, setValues] = useState<Query>(initialState);
   const [openAlert, setOpenAlert] = useState<boolean>(false);
   const [randomMealplanItems, setRandomMealplanItems] = useState<
      MealplanItem[] | []
   >([]);
   const [age, setAge] = useState<number>(18);
   const [height, setHeight] = useState<number>(60);
   const [weight, setWeight] = useState<number>(200);
   const [activityLevel, setActivityLevel] = useState<number>(1);
   const [goal, setGoal] = React.useState<
      'weight_loss' | 'maintain' | 'gain_muscle'
   >('weight_loss');
   const [gender, setGender] = useState<'male' | 'female'>('male');

   const [nutritionSummary, setNutritionSummary] =
      useState<NutritionSummaryMealplan>(initialNutritionSummary);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   //TODO fix the handleSearch function below
   const handleSearch = async (event: React.SyntheticEvent) => {
      // let newValues = { ...values, offset: 0 }; //declare new values so that there are no async bugs, and reset offset to 0 in case user changed it
      // setValues(newValues);
      // try {
      //    setIsLoading(true);
      //    event.preventDefault();
      //    // let foodItems = await axios.get(`/api/${route}`, {G
      //    //    params: newValues,
      //    //    withCredentials: true,
      //    // });
      //    if (foodItems.data.length === 0) {
      //       setIsLoading(false);
      //       setAlertMessage(
      //          'No options matched your search. Try again with a broader search'
      //       );
      //       setAlertSeverity('warning');
      //       setOpenAlert(true);
      //    } else {
      //       setValues(initialState);
      //       setAlertSeverity('success');
      //       setAlertMessage('Success! Here are your matching items.');
      //       setOpenAlert(true);
      //    }
      //    setIsLoading(false); //used to trigger the loading circle
      // } catch (err) {
      //    setIsLoading(false); //used to trigger the loading circle
      // }
   };

   const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      const currentGoals = getMetrics({
         gender,
         age,
         height,
         weight,
         activityLevel,
         goal,
      });
      setGoals(currentGoals);
      setAlertSeverity('success');
      setAlertMessage(
         'Your custom macronutrient values have been calculated! View the sidebar to see your calculations'
      );
      setOpenAlert(true);
   };

   const handleAlert = () => {
      setOpenAlert(!openAlert);
   };

   const handleTypeSelect = (event: SelectChangeEvent) => {
      setValues({ ...values, category: event.target.value });
   };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [event.target.id]: event.target.value });
   };
   const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
      if ((event.target as HTMLInputElement).value === values.allergy) {
         setValues({
            ...values,
            allergy: '',
         });
      } else {
         setValues({
            ...values,
            allergy: (event.target as HTMLInputElement).value,
         });
      }
   };
   return (
      <>
         <div className='main-page-container'>
            <Tooltip title='Open Sidebar'>
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
            </Tooltip>

            <Routes>
               <Route
                  path=''
                  element={
                     <>
                        <SampleFeaturesSidebar
                           mobileOpen={mobileOpen}
                           handleDrawerToggle={handleDrawerToggle}
                           values={values}
                           handleSearch={handleSearch}
                           handleInputChange={handleInputChange}
                           handleTypeSelect={handleTypeSelect}
                           goals={initialMealplanGoals}
                           nutritionSummary={nutritionSummary}
                           view={'mealplan'}
                           handleRadioClick={handleRadioClick}
                        />
                        <SampleMealPlanPage
                           setNutritionSummary={setNutritionSummary}
                           setAlertSeverity={setAlertSeverity}
                           setOpenAlert={setOpenAlert}
                           setRandomMealplanItems={setRandomMealplanItems}
                           setAlertMessage={setAlertMessage}
                           randomMealplanItems={randomMealplanItems}
                        />
                     </>
                  }
               />
               <Route
                  path='search'
                  element={
                     <SampleFeaturesSidebar
                        mobileOpen={mobileOpen}
                        handleDrawerToggle={handleDrawerToggle}
                        values={values}
                        handleSearch={handleSearch}
                        handleInputChange={handleInputChange}
                        handleTypeSelect={handleTypeSelect}
                        goals={goals}
                        nutritionSummary={nutritionSummary}
                        view={'search'}
                        handleRadioClick={handleRadioClick}
                     />
                  }
               />
               <Route
                  path='calculator'
                  element={
                     <SampleFeaturesSidebar
                        mobileOpen={mobileOpen}
                        handleDrawerToggle={handleDrawerToggle}
                        values={values}
                        handleSearch={handleSearch}
                        handleInputChange={handleInputChange}
                        handleTypeSelect={handleTypeSelect}
                        goals={goals}
                        nutritionSummary={nutritionSummary}
                        view={'calculator'}
                        handleRadioClick={handleRadioClick}
                     />
                  }
               />
            </Routes>
            <Outlet
               context={{
                  mobileOpen,
                  handleDrawerToggle,
                  setNutritionSummary,
                  setAlertSeverity,
                  openAlert,
                  setOpenAlert,
                  setValues,
                  setAlertMessage,
                  isLoading,
                  alertSeverity,
                  alertMessage,
                  goals,
                  setGoals,
                  setGender,
                  gender,
                  age,
                  setAge,
                  height,
                  setHeight,
                  weight,
                  setWeight,
                  activityLevel,
                  goal,
                  setGoal,
                  setActivityLevel,
                  handleSubmit,
               }}
            />
         </div>
         <CustomAlert
            openAlert={openAlert}
            handleAlert={handleAlert}
            alertSeverity={alertSeverity}
            alertMessage={alertMessage}
         />
      </>
   );
};

export default SampleFeaturesPage;
