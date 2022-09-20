import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
   SelectChangeEvent,
   Box,
   Drawer,
   IconButton,
   Toolbar,
} from '@mui/material';
import React, { FormEventHandler } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTitleLogo } from '../../../components/main-title-logo';
import { SearchFormCustom } from '../../../components/search-forms/SearchFormCustom';
import { SampleCalculatorSidebarContents } from './SampleCalculatorSidebarContents';
import './SampleFeatureSidebars.scss';
import { SampleMealplanSidebarContents } from './SampleMealplanSidebarContents';
import { CurrentGoals, ValuesType } from '../../../../../types/types';
const drawerWidth = '350px';

interface Props {
   handleDrawerToggle: () => void;
   mobileOpen: boolean;
   route: string;
   values: ValuesType;
   handleSearch: FormEventHandler<HTMLFormElement>;
   handleRouteChange: (event: SelectChangeEvent) => void;
   handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   handleTypeSelect: (event: SelectChangeEvent) => void;
   goals: CurrentGoals;
   nutritionSummary: any;
   view: 'mealplan' | 'search' | 'calculator';
}

export const SampleFeaturesSidebar = ({
   mobileOpen,
   handleDrawerToggle,
   route,
   values,
   handleSearch,
   handleRouteChange,
   handleInputChange,
   handleTypeSelect,
   goals,
   nutritionSummary,
   view,
}: Props): ReactJSXElement => {
   const location = useLocation();
   return (
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
                  pl: '1rem',
                  pr: '1rem',
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

            {view === 'search' ? (
               <SearchFormCustom
                  route={route}
                  values={values}
                  handleSubmit={handleSearch}
                  handleRouteChange={handleRouteChange}
                  handleInputChange={handleInputChange}
                  handleTypeSelect={handleTypeSelect}
               />
            ) : null}
            {view === 'mealplan' ? (
               <SampleMealplanSidebarContents
                  goals={goals}
                  nutritionSummary={nutritionSummary}
               />
            ) : null}
            {view === 'calculator' ? (
               <SampleCalculatorSidebarContents goals={goals} />
            ) : null}
         </Drawer>

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
                  pl: '1rem',
                  pr: '1rem',
               },
            }}
         >
            <MainTitleLogo />
            <Box sx={{ pt: '1rem' }}>
               {view === 'search' ? (
                  <SearchFormCustom
                     route={route}
                     values={values}
                     handleSubmit={handleSearch}
                     handleRouteChange={handleRouteChange}
                     handleInputChange={handleInputChange}
                     handleTypeSelect={handleTypeSelect}
                  />
               ) : null}
               {view === 'mealplan' ? (
                  <SampleMealplanSidebarContents
                     goals={goals}
                     nutritionSummary={nutritionSummary}
                  />
               ) : null}
               {view === 'calculator' ? (
                  <SampleCalculatorSidebarContents goals={goals} />
               ) : null}
            </Box>
         </Drawer>
      </>
   );
};
