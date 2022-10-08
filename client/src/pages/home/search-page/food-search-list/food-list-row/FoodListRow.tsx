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
      title: string
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

   handleOpeningAddToMealplanDialog,
}: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   const title = getFoodTitle(brand_name, description);

   const handleOpeningRow = (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpen(!open);
   };

   const handleOpeningModal = (e: React.MouseEvent) => {
      let servingSizesArr = [100];
      if (serving_size !== 100) {
         servingSizesArr.push(serving_size);
      }
      handleOpeningAddToMealplanDialog(
         parseInt(fdc_id),
         data_type,
         servingSizesArr,
         serving_size_unit,
         title
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
