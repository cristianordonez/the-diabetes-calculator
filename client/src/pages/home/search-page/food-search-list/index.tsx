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
import { StyledTableCell } from '../../../../components/styled-table-components/StyledTableCell';
import { StyledTableRow } from '../../../../components/styled-table-components/StyledTableRow';
import { AddToCartModal } from './add-to-cart-modal/AddToCartModal';
import { FoodListRow } from './food-list-row/FoodListRow';
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
   const [currentModifier, setCurrentModifier] = useState<string | null>();
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
      servingSizeUnit: string,
      title: string,
      modifier: string | null
   ) => {
      setCurrentId(id);
      setCurrentDataType(dataType);
      setCurrentServingSizes(servingSizes);
      setCurrentServingSizeUnit(servingSizeUnit);
      setCurrentTitle(title);
      setCurrentModifier(modifier);
      setOpenDialog(!openDialog);
   };

   const handleOpeningDialog = () => {
      setOpenDialog(!openDialog);
   };

   console.log('searchResults: ', searchResults);
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
                           <StyledTableCell
                              align='right'
                              className='desktop-table-view'
                           >
                              Fat&nbsp;(g)
                           </StyledTableCell>
                           <StyledTableCell
                              align='right'
                              className='desktop-table-view'
                           >
                              Carbs&nbsp;(g)
                           </StyledTableCell>
                           <StyledTableCell
                              align='right'
                              className='desktop-table-view'
                           >
                              Protein&nbsp;(g)
                           </StyledTableCell>
                        </StyledTableRow>
                     </TableHead>
                     <TableBody>
                        {searchResults.map((searchResult, index) => (
                           <FoodListRow
                              key={index}
                              handleOpeningAddToMealplanDialog={
                                 handleOpeningAddToMealplanDialog
                              }
                              brand_name={searchResult.brand_name}
                              custom_food_brand_name={
                                 searchResult.custom_food_brand_name
                              }
                              description={searchResult.description}
                              fdc_id={searchResult.fdc_id}
                              serving_size={searchResult.serving_size}
                              custom_food_serving_size={
                                 searchResult.custom_food_serving_size
                              }
                              serving_size_unit={searchResult.serving_size_unit}
                              custom_food_serving_size_unit={
                                 searchResult.custom_food_serving_size_unit
                              }
                              data_type={searchResult.data_type}
                              nutrition={searchResult.nutrition}
                              gram_weight={searchResult.gram_weight}
                              modifier={searchResult.modifier}
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
            currentTitle={currentTitle}
            setAlertMessage={setAlertMessage}
            setOpenSnackbar={setOpenSnackbar}
            setAlertSeverity={setAlertSeverity}
            currentModifier={currentModifier}
         />
      </>
   );
};
