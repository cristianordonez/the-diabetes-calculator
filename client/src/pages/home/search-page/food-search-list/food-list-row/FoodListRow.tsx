import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, TableCell } from '@mui/material';
import React, { useState } from 'react';
import { FoodSearchResult } from '../../../../../../../types/types';
import { NutritionTable } from '../../../../../components/nutrition-table/NutritionTable';
import { StyledTableRow } from '../../../../../components/styled-table-components/StyledTableRow';
import './FoodListRow.scss';
interface Props extends FoodSearchResult {
   handleOpeningAddToMealplanDialog: (
      id: number,
      dataType: string,
      servingSizes: number[],
      servingSizeUnit: string,
      description: string,
      brand: string,
      modifier: string | null
   ) => void;
}
export const FoodListRow = ({
   brand_owner,
   description,
   fdc_id,
   serving_size,
   serving_size_unit,
   data_type,
   nutrition,
   custom_food_brand_owner,
   custom_food_serving_size,
   custom_food_serving_size_unit,
   gram_weight,
   modifier,
   handleOpeningAddToMealplanDialog,
}: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   let brand: string = '';
   let current_serving_size_unit: string | null = '';
   let current_serving_size: number | null = 0;
   let servingSizesArr = [100];
   let finalModifier: string | null = '';
   if (data_type === 'custom' && custom_food_brand_owner !== null) {
      // brand = getFoodTitle(custom_food_brand_name, description);
      brand = custom_food_brand_owner;
      current_serving_size_unit = custom_food_serving_size_unit;
      current_serving_size = custom_food_serving_size;
      finalModifier = 'Custom input';
   } else if (data_type === 'branded_food' && brand_owner !== null) {
      brand = brand_owner;
      // brand = getFoodTitle(brand_name, description);
      current_serving_size_unit = serving_size_unit;
      current_serving_size = serving_size;
      finalModifier = '1 serving as per nutrition label';
   } else if (brand_owner !== null) {
      brand = brand_owner;
      // brand = getFoodTitle(brand_name, description);
      current_serving_size_unit = 'g';
      current_serving_size = gram_weight;
      finalModifier = modifier;
   }

   const handleOpeningRow = (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpen(!open);
   };

   const handleOpeningModal = (e: React.MouseEvent) => {
      if (current_serving_size !== 100 && current_serving_size !== null) {
         servingSizesArr.push(current_serving_size);
      }
      if (current_serving_size_unit === null) {
         current_serving_size_unit = 'g';
      }
      handleOpeningAddToMealplanDialog(
         parseInt(fdc_id),
         data_type,
         servingSizesArr,
         current_serving_size_unit,
         description,
         brand,
         finalModifier
      );
   };

   return (
      <>
         <StyledTableRow
            hover={true}
            onClick={handleOpeningModal}
            sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }}
         >
            <TableCell>
               <IconButton
                  aria-label='expand row'
                  size='small'
                  onClick={handleOpeningRow}
               >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component='th' scope='row'>
               {brand}
            </TableCell>
            <TableCell align='right'>{nutrition.calories}</TableCell>
            <TableCell className='desktop-table-view' align='right'>
               {nutrition.total_fat}
            </TableCell>
            <TableCell className='desktop-table-view' align='right'>
               {nutrition.total_carbohydrates}
            </TableCell>
            <TableCell className='desktop-table-view' align='right'>
               {nutrition.protein}
            </TableCell>
         </StyledTableRow>
         <NutritionTable open={open} nutrition={nutrition} />
      </>
   );
};
