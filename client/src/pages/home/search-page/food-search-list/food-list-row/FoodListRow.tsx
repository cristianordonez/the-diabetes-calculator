import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, TableCell } from '@mui/material';
import React, { useState } from 'react';
import { FoodSearchResult } from '../../../../../../../types/types';
import { getFoodTitle } from '../../../../../../../utils/getFoodTitle';
import { NutritionTable } from '../../../../../components/nutrition-table/NutritionTable';
import { StyledTableRow } from '../../../../../components/styled-table-components/StyledTableRow';
import './FoodListRow.scss';

interface Props extends FoodSearchResult {
   handleOpeningAddToMealplanDialog: (
      id: number,
      dataType: string,
      servingSizes: number[],
      servingSizeUnit: string,
      title: string,
      modifier: string | null
   ) => void;
}

export const FoodListRow = ({
   brand_name,
   description,
   fdc_id,
   serving_size,
   serving_size_unit,
   data_type,
   nutrition,
   custom_food_brand_name,
   custom_food_serving_size,
   custom_food_serving_size_unit,
   gram_weight,
   modifier,
   handleOpeningAddToMealplanDialog,
}: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   let title = '';
   let current_serving_size_unit: string | null = '';
   let current_serving_size: number | null = 0;
   let servingSizesArr = [100];
   let finalModifier: string | null = '';
   if (data_type === 'custom') {
      title = getFoodTitle(custom_food_brand_name, description);
      //or should be custom_serving_size_unit from custom_foods
      current_serving_size_unit = custom_food_serving_size_unit;
      // if custom should be custom_serving_size
      current_serving_size = custom_food_serving_size;
      finalModifier = 'Custom input';
   } else if (data_type === 'branded_food') {
      title = getFoodTitle(brand_name, description);
      //should be serving_size_unit from branded_food
      current_serving_size_unit = serving_size_unit;
      // if branded_food should be serving_size
      current_serving_size = serving_size;
      finalModifier = '1 serving as per nutrition label';
   } else {
      title = getFoodTitle(brand_name, description);
      //or should be modifier from food_portion for foods that are not branded or custom
      current_serving_size_unit = 'g';
      // if other should be gram weight
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
         title,
         finalModifier
      );
   };

   console.log('serving_size: ', serving_size);
   console.log('data_type: ', data_type);
   console.log('custom_food_brand_name: ', custom_food_brand_name);
   console.log('custom_food_serving_size: ', custom_food_serving_size);
   console.log('gram_weight: ', gram_weight);
   console.log('modifier: ', modifier);
   console.log('serving_size_unit: ', serving_size_unit);
   console.log('custom_food_serving_unit: ', custom_food_serving_size_unit);

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
               {title}
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
