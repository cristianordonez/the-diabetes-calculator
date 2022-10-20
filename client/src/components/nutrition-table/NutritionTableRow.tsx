import { TableRow, Typography } from '@mui/material';
import React from 'react';
import {
   getNutrientFormattedName,
   getNutrientUnitSize,
} from '../../utils/getNutrientUnitInfoArray';
import { StyledTableCell } from '../styled-table-components/StyledTableCell';

interface Props {
   nutrientName: string;
   nutrientAmount: null | number | string;
   serving_size: number | null;
}

const nutrientMap = {};

export const NutritionTableRow = ({
   nutrientName,
   nutrientAmount,
   serving_size,
}: Props) => {
   console.log('nutrientName: ', nutrientName);
   console.log('nutrientAmount: ', nutrientAmount);
   if (
      nutrientName === 'id' ||
      nutrientName === 'meal_id' ||
      nutrientName === 'fdc_id'
   ) {
      return null;
   } else if (
      nutrientName === 'saturated_fat' ||
      nutrientName === 'trans_fat' ||
      nutrientName === 'dietary_fiber' ||
      nutrientName === 'total_sugars'
   ) {
      return (
         <>
            <TableRow>
               <StyledTableCell component='th' scope='row'>
                  <Typography variant='body2' sx={{ pl: '20px' }}>
                     {getNutrientFormattedName(nutrientName)}
                  </Typography>
               </StyledTableCell>
               {nutrientAmount !== null ? (
                  <StyledTableCell>
                     {Math.round(
                        (Number(nutrientAmount) / 100) * Number(serving_size)
                     )}
                     &nbsp;
                     {getNutrientUnitSize(nutrientName)}
                  </StyledTableCell>
               ) : (
                  <StyledTableCell>-</StyledTableCell>
               )}
            </TableRow>
         </>
      );
   } else {
      return (
         <>
            <TableRow>
               <StyledTableCell component='th' scope='row'>
                  <Typography variant='body2' fontWeight={'bold'}>
                     {getNutrientFormattedName(nutrientName)}
                  </Typography>
               </StyledTableCell>
               {nutrientAmount !== null ? (
                  <StyledTableCell>
                     {Math.round(
                        (Number(nutrientAmount) / 100) * Number(serving_size)
                     )}
                     &nbsp;
                     {getNutrientUnitSize(nutrientName)}
                  </StyledTableCell>
               ) : (
                  <StyledTableCell>-</StyledTableCell>
               )}
            </TableRow>
         </>
      );
   }
};
