import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchFormSuggested from './search-form-suggested/SearchFormSuggested';
import SearchFormCustom from './search-form-custom/SearchFormCustom';

const SearchForm = () => {
   const [currentTab, setCurrentTab] = useState<string>('custom-search');
   const [route, setRoute] = useState<string>('recipes');
   const [values, setValues] = useState({
      query: '',
      type: '',
      diet: '',
      intolerance: '',
      minCalories: '',
      maxCalories: '',
      minCarbs: '',
      maxCarbs: '',
      minProtein: '',
      maxProtein: '',
      minFat: '',
      maxFat: '',
      number: '', //number of items to return
      offset: '', //number of results to skip, useful for lazy loading
   });
   const handleChange = (event: React.SyntheticEvent, currentValue: string) => {
      setCurrentTab(currentValue);
   };

   const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      console.log(values);
   };
   return (
      <>
         <Stack direction='row' spacing={1}>
            <ScreenSearchDesktopIcon />
            <Typography variant='h4' component='h1'>
               Search
            </Typography>
         </Stack>
         <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label='switch between custom and suggested search'
         >
            <Tab value='custom-search' label='Custom Search' />
            <Tab value='suggested-goals' label='Suggested Goals' />
         </Tabs>

         {currentTab === 'custom-search' ? (
            <SearchFormCustom
               route={route}
               setRoute={setRoute}
               values={values}
               setValues={setValues}
               handleSubmit={handleSubmit}
            />
         ) : (
            <SearchFormSuggested />
         )}
      </>
   );
};

export default SearchForm;
