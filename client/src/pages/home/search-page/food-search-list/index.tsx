import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
   AlertColor,
   Button,
   Paper,
   Stack,
   Table,
   TableBody,
   TableContainer,
   TableHead,
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
import { StyledTableCell } from '../../../../components/styled-table-components/StyledTableCell';
import { StyledTableRow } from '../../../../components/styled-table-components/StyledTableRow';
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
   const [currentTitle, setCurrentTitle] = useState<string>('');
   const [currentDataType, setCurrentDataType] = useState<string>('');
   const [currentServingSizeUnit, setCurrentServingSizeUnit] =
      useState<string>('');
   const [currentServingSizes, setCurrentServingSizes] = useState<number[]>([
      100,
   ]);

   const handleOpeningAddToMealplanDialog = (
      id: number,
      dataType: string,
      servingSizes: number[],
      servingSizeUnit: string
   ) => {
      setCurrentId(id);
      console.log('dataType: ', dataType);
      setCurrentDataType(dataType);
      setCurrentServingSizes(servingSizes);
      setCurrentServingSizeUnit(servingSizeUnit);
      setOpenDialog(!openDialog);
   };

   const handleOpeningDialog = () => {
      setOpenDialog(!openDialog);
   };

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
                  Click on any item to add it to your mealplan
               </Typography>
            </Stack>
            <Typography variant='h6' align='left'>
               Search Results
            </Typography>
            <div className='food-search-main-container'>
               <TableContainer component={Paper}>
                  <Table stickyHeader={true} aria-label='search results'>
                     <TableHead>
                        <StyledTableRow>
                           <StyledTableCell variant='head' />
                           <StyledTableCell>
                              Food&nbsp;(100g serving)
                           </StyledTableCell>
                           <StyledTableCell align='right'>
                              Calories
                           </StyledTableCell>
                           <StyledTableCell align='right'>
                              Fat&nbsp;(g)
                           </StyledTableCell>
                           <StyledTableCell align='right'>
                              Carbs&nbsp;(g)
                           </StyledTableCell>
                           <StyledTableCell align='right'>
                              Protein&nbsp;(g)
                           </StyledTableCell>
                        </StyledTableRow>
                     </TableHead>
                     <TableBody>
                        {searchResults.map((searchResult) => (
                           <FoodListRow
                              key={searchResult.fdc_id}
                              handleOpeningAddToMealplanDialog={
                                 handleOpeningAddToMealplanDialog
                              }
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
            </div>
            {showLoadMoreBtn ? (
               <Button fullWidth onClick={handleLoadMore} variant='text'>
                  Load More
               </Button>
            ) : null}
         </div>

         <AddToCartModal
            openDialog={openDialog}
            handleOpeningDialog={handleOpeningDialog}
            id={currentId}
            currentDataType={currentDataType}
            currentServingSizes={currentServingSizes}
            currentServingSizeUnit={currentServingSizeUnit}
            setOpenDialog={setOpenDialog}
            setAlertMessage={setAlertMessage}
            setOpenSnackbar={setOpenSnackbar}
            setAlertSeverity={setAlertSeverity}
         />
      </>
   );
};
