//shared sidebar
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React, {
   MouseEventHandler,
   ReactNode,
   useEffect,
   useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
   CurrentGoals,
   FoodSearchResult,
   NutritionSummaryMealplan,
} from '../../../../types/types';
import { DailyGoals } from '../daily-goals/daily-goals-main/DailyGoalsMain';
import { DailyGoalsMealplan } from '../daily-goals/daily-goals-mealplan/DailyGoalsMealplan';
import { MainTitleLogo } from '../main-title-logo/index';
interface Props {
   mobileOpen: boolean | undefined;
   handleDrawerToggle: MouseEventHandler;
   SearchFormComponent?: ReactNode;
   searchResults?: FoodSearchResult[];
   goals: CurrentGoals;
   nutritionSummary: NutritionSummaryMealplan;
   loading: boolean;
}

const drawerWidth = 350;

export const SideBar = ({
   mobileOpen,
   handleDrawerToggle,
   SearchFormComponent,
   searchResults,
   goals,
   loading,
   nutritionSummary,
}: Props) => {
   const location = useLocation();
   const [page, setPage] = useState('');

   useEffect(() => {
      if (location.pathname === '/home') {
         setPage('mealplan');
      } else if ((location.pathname = '/home/search')) {
         setPage('search');
      } else {
         setPage('other');
      }
   }, [location]);

   console.log('loading: ', loading);
   return (
      <>
         {/* MOBILE */}
         <>
            <Drawer
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                     pt: '1rem',
                     pb: '1rem',
                  },
               }}
            >
               <Toolbar>
                  <IconButton
                     color='inherit'
                     aria-label='open drawer'
                     edge='start'
                     onClick={handleDrawerToggle}
                     sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                     <ArrowBackIosIcon />
                  </IconButton>
               </Toolbar>
               <Stack
                  sx={{ width: '100%', pb: '3rem' }}
                  direction='row'
                  spacing={2}
                  justifyContent={'center'}
                  alignItems='center'
               >
                  <MainTitleLogo />
               </Stack>
               {/* RENDER SEARCH FORM WHEN THERE ARE FOOD ITEMS IN STATE */}
               {!loading &&
               page === 'search' &&
               searchResults !== undefined &&
               searchResults.length > 0
                  ? SearchFormComponent
                  : null}{' '}
               {/* RENDER GOALS WHEN THERE ARE NO SEARCH RESULTS, AND PAGE IS NOT MEALPLAN */}
               {!loading &&
               page !== 'mealplan' &&
               searchResults != undefined &&
               searchResults.length === 0 ? (
                  <DailyGoals goals={goals} />
               ) : null}
               {/* RENDER GOALSMEALPLAN WHEN PAGE IS MEALPLAN AND THERE IS NUTRITION SUMMARY */}
               {!loading &&
               page === 'mealplan' &&
               nutritionSummary !== undefined ? (
                  <DailyGoalsMealplan
                     goals={goals}
                     nutritionSummary={nutritionSummary}
                  />
               ) : null}
            </Drawer>

            {/* DESKTOP */}
            <Drawer
               open
               variant='permanent'
               ModalProps={{ keepMounted: true }}
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                     pt: '1rem',
                  },
               }}
            >
               <Stack
                  sx={{ width: '100%', pb: '3rem' }}
                  direction='row'
                  spacing={2}
                  justifyContent={'center'}
                  alignItems='center'
               >
                  <MainTitleLogo />
               </Stack>
               {/* RENDER SEARCH FORM WHEN THERE ARE FOOD ITEMS IN STATE */}
               {!loading &&
               page === 'search' &&
               searchResults !== undefined &&
               searchResults.length > 0
                  ? SearchFormComponent
                  : null}{' '}
               {/* RENDER GOALS WHEN THERE ARE NO SEARCH RESULTS, AND PAGE IS NOT MEALPLAN */}
               {!loading &&
               page !== 'mealplan' &&
               searchResults != undefined &&
               searchResults.length === 0 ? (
                  <DailyGoals goals={goals} />
               ) : null}
               {/* RENDER GOALSMEALPLAN WHEN PAGE IS MEALPLAN AND THERE IS NUTRITION SUMMARY */}
               {!loading &&
               page === 'mealplan' &&
               nutritionSummary !== undefined ? (
                  <DailyGoalsMealplan
                     goals={goals}
                     nutritionSummary={nutritionSummary}
                  />
               ) : null}
               {loading ? (
                  <Typography variant='h6'>Searching...</Typography>
               ) : null}
            </Drawer>
         </>
      </>
   );
};
