import { useOutletContext } from 'react-router-dom';

interface OutletContext {
   loading: any;
   handleDrawerToggle: any;
   apiData: any;
   route: any;
   handleLoadMore: any;
   setAlertMessage: any;
   setOpenAlert: any;
   setAlertSeverity: any;
   showLoadMoreBtn: any;
   SearchFormComponent: any;
   openAlert: any;
   handleAlert: any;
   alertSeverity: any;
   alertMessage: any;
   setNutritionSummary: any;
   setMealplanItemsFound: any;
   setMealplanItems: any;
   currentDay: any;
   setCurrentDay: any;
   mealplanItems: any;
   breakfastItems: any;
   setBreakfastItems: any;
   lunchItems: any;
   setLunchItems: any;
   dinnerItems: any;
   setDinnerItems: any;
   goals: any;
   setGoals: any;
}

export const useHomeOutlet = () => {
   return useOutletContext<OutletContext>();
};
