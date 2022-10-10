import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
   IconButton,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
import { MealplanItem } from '../../../../../../../types/types';
import { NutritionTable } from '../../../../../components/nutrition-table/NutritionTable';
import { StyledTableCell } from '../../../../../components/styled-table-components/StyledTableCell';
import { StyledTableRow } from '../../../../../components/styled-table-components/StyledTableRow';
interface Props {
   slotName: string;
   mealItem: MealplanItem;
}

export const SampleMealplanSlot = ({ slotName, mealItem }: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   const handleOpeningRow = (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpen(!open);
   };
   console.log('mealItem: ', mealItem);

   let servingSize = mealItem.serving_size === '' ? 100 : mealItem.serving_size;

   return (
      <TableContainer component={Paper}>
         <Table aria-label={`Food items for ${slotName}`}>
            <TableHead>
               <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} variant='head'>
                     {slotName}
                  </StyledTableCell>
                  <StyledTableCell variant='head' />
                  <StyledTableCell variant='head' />
                  <StyledTableCell variant='head' />
               </StyledTableRow>
            </TableHead>
            <TableBody>
               <React.Fragment key={mealItem.fdc_id}>
                  <StyledTableRow
                     hover={false}
                     sx={{
                        '& > *': { borderBottom: 'unset' },
                     }}
                  >
                     <TableCell>
                        <Tooltip
                           enterDelay={600}
                           enterNextDelay={1200}
                           title={`View item's nutrition facts`}
                        >
                           <IconButton
                              aria-label='expand row'
                              size='small'
                              onClick={handleOpeningRow}
                           >
                              {open ? (
                                 <KeyboardArrowUpIcon />
                              ) : (
                                 <KeyboardArrowDownIcon />
                              )}
                           </IconButton>
                        </Tooltip>
                     </TableCell>
                     <TableCell>mealItem.description</TableCell>
                     <TableCell>
                        {servingSize} {mealItem.serving_size_unit}
                     </TableCell>
                     <TableCell>{mealItem.nutrition.calories} kcal</TableCell>
                  </StyledTableRow>
                  <NutritionTable open={open} nutrition={mealItem.nutrition} />
               </React.Fragment>
            </TableBody>
         </Table>
      </TableContainer>
   );
};
