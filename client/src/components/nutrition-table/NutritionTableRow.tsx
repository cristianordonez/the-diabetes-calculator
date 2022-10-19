import { TableRow } from '@mui/material';
import React from 'react';
import { StyledTableCell } from '../styled-table-components/StyledTableCell';

interface Props {
   nutrientName: string;
   nutrientAmount: null | number | string;
   serving_size_conversion_factor: number;
}

export const NutritionTableRow = ({
   nutrientName,
   nutrientAmount,
   serving_size_conversion_factor,
}: Props) => {
   const getFormattedName = (name: string) => {
      let arrOfWords = name.replace('_', ' ').split(' ');
      let result = arrOfWords.map(
         (word) => (word = word.slice(0, 1).toUpperCase() + word.slice(1))
      );
      return result.join(' ');
   };

   if (nutrientName === 'fdc_id') {
      return null;
   } else {
      return (
         <>
            <TableRow>
               <StyledTableCell
                  sx={{ fontWeight: 'bold' }}
                  component='th'
                  scope='row'
               >
                  {getFormattedName(nutrientName)}
               </StyledTableCell>
               {nutrientAmount !== null ? (
                  <StyledTableCell>
                     {Math.round(Number(nutrientAmount))}
                  </StyledTableCell>
               ) : (
                  <StyledTableCell>-</StyledTableCell>
               )}
            </TableRow>
         </>
      );
   }
};
