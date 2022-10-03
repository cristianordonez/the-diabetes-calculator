import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
   Box,
   Collapse,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableHead,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { FoodSearchResult } from '../../../../types/types';
import { StyledTableCell } from '../styled-table-components/StyledTableCell';
import { StyledTableRow } from '../styled-table-components/StyledTableRow';
import './FoodListRow.scss';

interface Props extends FoodSearchResult {
   handleOpeningAddToMealplanDialog: (
      id: number,
      dataType: string,
      servingSizes: number[],
      servingSizeUnit: string
   ) => void;
}

export const FoodListRow = ({
   brand_name,
   brand_owner,
   branded_food_category,
   description,
   fdc_id,
   serving_size,
   serving_size_unit,
   data_type,
   calories,
   calcium,
   cholesterol,
   dietary_fiber,
   iron,
   potassium,
   protein,
   saturated_fat,
   monounsaturated_fat,
   polyunsaturated_fat,
   sodium,
   sugar,
   total_carbohydrates,
   total_fat,
   trans_fat,
   vitamin_a,
   vitamin_c,
   vitamin_d,
   handleOpeningAddToMealplanDialog,
}: Props) => {
   const [open, setOpen] = useState<boolean>(false);

   let brand_name_updated = '';
   let description_updated = '';

   if (brand_name !== null) {
      const brandNameArr = brand_name.split(' ');
      for (let i = 0; i < brandNameArr.length; i++) {
         brandNameArr[i] =
            brandNameArr[i][0] + brandNameArr[i].slice(1).toLowerCase();
      }
      brand_name_updated = brandNameArr.join(' ');
   }

   if (description !== null) {
      const descriptionArr = description.split(' ');
      for (let i = 0; i < descriptionArr.length; i++) {
         descriptionArr[i] =
            descriptionArr[i][0] + descriptionArr[i].slice(1).toLowerCase();
      }
      description_updated = descriptionArr.join(' ');
   }

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
         serving_size_unit
      );
   };

   //todo display brand name with description
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
               {description_updated}
            </TableCell>
            <TableCell align='right'>{calories}</TableCell>
            <TableCell align='right'>{total_fat}</TableCell>
            <TableCell align='right'>{total_carbohydrates}</TableCell>
            <TableCell align='right'>{protein}</TableCell>
         </StyledTableRow>
         <StyledTableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout='auto' unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     <>
                        <Typography variant='h6' gutterBottom component='div'>
                           Nutrition Facts
                        </Typography>
                        <Table
                           size='small'
                           aria-label='additional nutrition data'
                           stickyHeader={true}
                        >
                           <TableHead>
                              <StyledTableRow>
                                 <StyledTableCell>Nutrient</StyledTableCell>
                                 <StyledTableCell>Amount</StyledTableCell>
                              </StyledTableRow>
                           </TableHead>
                           <TableBody>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Calories
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${calories}` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Total Fat
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${total_fat} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Saturated
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${saturated_fat} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Trans
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${trans_fat} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Polyunsaturated
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${polyunsaturated_fat} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Monounsaturated
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${monounsaturated_fat} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Cholesterol
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${cholesterol} mg` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Sodium
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${sodium} mg` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Total Carbohydrates
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${total_carbohydrates} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Dietary Fiber
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${dietary_fiber} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell component='th' scope='row'>
                                    Sugar
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${sugar} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Protein
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${protein} g` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Vitamin D
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${vitamin_d} %` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Calcium
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${calcium} %` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Iron
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${iron} %` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Potassium
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${potassium} mg` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Vitamin A
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${vitamin_a} %` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                 <StyledTableCell
                                    sx={{ fontWeight: 'bold' }}
                                    component='th'
                                    scope='row'
                                 >
                                    Vitamin C
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {`${vitamin_c} %` || '-'}
                                 </StyledTableCell>
                              </StyledTableRow>
                           </TableBody>
                        </Table>
                     </>
                  </Box>
               </Collapse>
            </TableCell>
         </StyledTableRow>
      </>
   );
};
