import React, { useState } from 'react';
import SearchForm from '../../components/search-form/SearchForm';
import DailyGoals from '../../components/daily-goals/DailyGoals';
import FoodSearchList from '../../components/food-search-list/FoodSearchList';
import axios from 'axios';

const Search = () => {
   const [apiData, setAPIData] = useState([]);
   const [route, setRoute] = useState<string>('recipes');
   const [wasEmptyResponse, setWasEmptyResponse] = useState(false);
   const [currentTab, setCurrentTab] = useState<string>('custom-search');
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
      let promise = axios.get(`${__API__}/${route}`, { params: values });
      promise.then((response) => {
         console.log('response:', response);
         //set state of wasEmptyResponse to false or true to activate the snackbar to tell users their request was too strict
         response.data.length
            ? setWasEmptyResponse(false)
            : setWasEmptyResponse(true);
         setAPIData(response.data);
      });
      promise.catch((err) => {
         console.log('err:', err);
      });
   };
   return (
      <>
         <DailyGoals />
         {apiData.length ? (
            <FoodSearchList apiData={apiData} />
         ) : (
            <SearchForm
               handleSubmit={handleSubmit}
               route={route}
               setRoute={setRoute}
               handleChange={handleChange}
               currentTab={currentTab}
               setCurrentTab={setCurrentTab}
               values={values}
               setValues={setValues}
            />
         )}
         {wasEmptyResponse && !apiData.length && (
            <div>was too strict try again </div>
         )}
      </>
   );
};

export default Search;
