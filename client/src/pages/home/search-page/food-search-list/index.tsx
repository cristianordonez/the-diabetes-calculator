import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
   AlertColor,
   Button,
   Paper,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import React, {
   Dispatch,
   MouseEventHandler,
   SetStateAction,
   useState,
} from 'react';
import { FoodSearchResult } from '../../../../../../types/types';
import { FoodListRow } from '../../../../components/food-list-row/FoodListRow';
import { AddToCartModal } from './add-to-cart-modal';

import './index.scss';
interface Props {
   searchResults: FoodSearchResult[];
   handleLoadMore: MouseEventHandler<HTMLButtonElement>;
   setAlertMessage: Dispatch<SetStateAction<string>>;
   setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
   setAlertSeverity: Dispatch<SetStateAction<AlertColor>>;
   showLoadMoreBtn: boolean;
}

export const FoodSearchList = ({
   searchResults,
   handleLoadMore,
   setAlertMessage,
   setOpenSnackbar,
   setAlertSeverity,
   showLoadMoreBtn,
}: Props) => {
   const [openDialog, setOpenDialog] = useState<boolean>(false);
   const [currentId, setCurrentId] = useState<number>(0);
   const [currentTitle, setCurrentTitle] = useState('');

   const handleOpeningAddToMealplanDialog = (title: string, id: number) => {
      setCurrentTitle(title);
      setCurrentId(id);
      setOpenDialog(!openDialog);
   };

   const handleOpeningDialog = () => {
      setOpenDialog(!openDialog);
   };

   console.log('searchResults:', searchResults);
   return (
      <>
         <div className='food-search-list'>
            <Stack
               direction='row'
               spacing={{ xs: 0, sm: 1 }}
               sx={{ width: '100%' }}
            >
               <MenuBookIcon />
               <Typography variant='body1'>
                  Click on the Add to Mealplan button then choose intended date
                  and slot (morning, afternoon, evening, or snack) to save any
                  item
               </Typography>
            </Stack>
            <Typography variant='h6'>Search Results</Typography>
            <div className='food-search-main-container'>
               <TableContainer component={Paper}>
                  <Table stickyHeader={true} aria-label='collapsible table'>
                     <TableHead>
                        <TableRow>
                           <TableCell variant='head' />
                           <TableCell>Food&nbsp;(100g serving)</TableCell>
                           <TableCell align='right'>Calories</TableCell>
                           <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                           <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                           <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {searchResults.map((searchResult) => (
                           <FoodListRow
                              key={searchResult.fdc_id}
                              brand_name={searchResult.brand_name}
                              brand_owner={searchResult.brand_owner}
                              branded_food_category={
                                 searchResult.branded_food_category
                              }
                              description={searchResult.description}
                              fdc_id={searchResult.fdc_id}
                              serving_size={searchResult.serving_size}
                              serving_size_unit={searchResult.serving_size_unit}
                              data_type={searchResult.data_type}
                              calories={searchResult.calories}
                              calcium={searchResult.calcium}
                              cholesterol={searchResult.cholesterol}
                              dietary_fiber={searchResult.dietary_fiber}
                              iron={searchResult.iron}
                              potassium={searchResult.potassium}
                              protein={searchResult.protein}
                              saturated_fat={searchResult.saturated_fat}
                              monounsaturated_fat={
                                 searchResult.monounsaturated_fat
                              }
                              polyunsaturated_fat={
                                 searchResult.polyunsaturated_fat
                              }
                              sodium={searchResult.sodium}
                              sugar={searchResult.sugar}
                              total_carbohydrates={
                                 searchResult.total_carbohydrates
                              }
                              total_fat={searchResult.total_fat}
                              trans_fat={searchResult.trans_fat}
                              vitamin_a={searchResult.vitamin_a}
                              vitamin_c={searchResult.vitamin_c}
                              vitamin_d={searchResult.vitamin_d}
                           />
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
               {/* TODO fix this part with own component */}
               {/* {route === 'ingredients'
                  ? searchResults.map((item: IngredientType, index: number) => (
                       <React.Fragment key={index}>
                          <div data-testid='food-search-item'>
                             <FoodItemContents
                                route={route}
                                image={item.image}
                                id={item.id}
                                title={item.name}
                                nutrition={item.nutrition}
                                imageType={'jpg'}
                                handleOpeningAddIngredientModal={
                                   handleOpeningAddIngredientModal
                                }
                                amount={item.amount}
                                possibleUnits={item.possibleUnits}
                                unit={item.unit}
                                isMealPlanItem={false} //used to add a X icon to delete mealplans
                             />
                          </div>
                       </React.Fragment>
                    ))
                  : searchResults.map((item: FoodItemType, index: number) => (
                       <React.Fragment key={index}>
                          <div data-testid='food-search-item'>
                             <FoodItemContents
                                route={route}
                                image={item.image}
                                id={item.id}
                                title={item.title}
                                restaurantChain={item.restaurantChain}
                                nutrition={item.nutrition}
                                url={item.sourceUrl}
                                imageType={item.imageType}
                                handleOpeningAddToMealplanDialog={
                                   handleOpeningAddToMealplanDialog
                                }
                                isMealPlanItem={false} //used to add a X icon to delete mealplans
                             />
                          </div>
                       </React.Fragment>
                    ))} */}
            </div>
            {showLoadMoreBtn ? (
               <Button fullWidth onClick={handleLoadMore} variant='contained'>
                  Load More
               </Button>
            ) : null}
         </div>

         <AddToCartModal
            openDialog={openDialog}
            handleOpeningDialog={handleOpeningDialog}
            title={currentTitle}
            id={currentId}
            setOpenDialog={setOpenDialog}
            setAlertMessage={setAlertMessage}
            setOpenSnackbar={setOpenSnackbar}
            setAlertSeverity={setAlertSeverity}
         />
      </>
   );
};
