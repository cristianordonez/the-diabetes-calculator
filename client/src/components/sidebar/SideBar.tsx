//shared sidebar
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Drawer, IconButton, Stack, Toolbar } from '@mui/material';
import React, { MouseEventHandler, ReactNode } from 'react';
import { CurrentGoals, FoodSearchResult } from '../../../../types/types';
import { DailyGoals } from '../daily-goals';
import { MainTitleLogo } from '../main-title-logo/index';

interface Props {
   mobileOpen: boolean | undefined;
   handleDrawerToggle: MouseEventHandler;
   SearchFormComponent?: ReactNode;
   searchResults?: FoodSearchResult[];
   goals: CurrentGoals;
   page: string;
   nutritionSummary?: any;
   mealplanItemsFound?: boolean;
}

const drawerWidth = 350;

export const SideBar = ({
   mobileOpen,
   handleDrawerToggle,
   SearchFormComponent,
   searchResults,
   goals,
   page,
   nutritionSummary,
   mealplanItemsFound,
}: Props) => {
   console.log('nutritionSummary: ', nutritionSummary);
   console.log('mealplanItemsFound:', mealplanItemsFound);
   console.log('goals: ', goals);
   console.log('page: ', page);
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
               {/* TODO fix this search form component */}
               {page === 'search' &&
               searchResults !== undefined &&
               searchResults.length
                  ? SearchFormComponent
                  : null}{' '}
               {page === 'search' &&
               searchResults !== undefined &&
               searchResults.length === 0 ? (
                  <DailyGoals goals={goals} page={'search'} />
               ) : null}
               {page === 'mealplan' &&
               nutritionSummary !== undefined &&
               nutritionSummary.length > 0 ? (
                  <DailyGoals
                     goals={goals}
                     nutritionSummary={nutritionSummary}
                     page={'mealplan'}
                  />
               ) : null}
               {page === 'mealplan' &&
               nutritionSummary !== undefined &&
               !nutritionSummary.length &&
               !mealplanItemsFound ? (
                  <DailyGoals goals={goals} page={'search'} />
               ) : null}
               {page === 'macrocalculator' ||
               (page === 'user-profile' && !nutritionSummary) ? (
                  <DailyGoals goals={goals} page={'search'} />
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
               {page === 'search' &&
               searchResults !== undefined &&
               searchResults.length
                  ? SearchFormComponent
                  : null}{' '}
               {page === 'search' &&
               searchResults !== undefined &&
               searchResults.length === 0 ? (
                  <DailyGoals goals={goals} page={'search'} />
               ) : null}
               {page === 'mealplan' &&
               nutritionSummary !== undefined &&
               nutritionSummary.length > 0 ? (
                  <DailyGoals
                     goals={goals}
                     nutritionSummary={nutritionSummary}
                     page={'mealplan'}
                  />
               ) : null}
               {page === 'mealplan' &&
               nutritionSummary !== undefined &&
               nutritionSummary.length === 0 &&
               !mealplanItemsFound ? (
                  <DailyGoals goals={goals} page={'search'} />
               ) : null}
               {page === 'macrocalculator' ||
               (page === 'user-profile' && !nutritionSummary) ? (
                  <DailyGoals goals={goals} page={'search'} />
               ) : null}
            </Drawer>
         </>
      </>
   );
};
