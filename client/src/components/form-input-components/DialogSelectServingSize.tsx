import { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

import {
   Divider,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   Typography,
} from '@mui/material';

interface Props {
   handleSelectServingSize?: (event: SelectChangeEvent) => void;
   servingSize: number;
   currentServingSizes: number[];
   currentServingSizeUnit: string;
   currentModifier: string | null | undefined;
}

export const DialogSelectServingSize = ({
   handleSelectServingSize,
   currentServingSizes: currentServingSizes,
   servingSize,
   currentServingSizeUnit,
   currentModifier,
}: Props) => {
   return (
      <>
         <Divider />

         <Stack
            alignItems='center'
            direction={'row'}
            spacing={2}
            sx={{ pl: '1rem', pr: '1rem' }}
            justifyContent={'center'}
         >
            <Typography sx={{ minWidth: '25%' }} variant='body2'>
               Serving Size
            </Typography>
            <FormControl>
               <InputLabel>Enter serving size</InputLabel>
               <Select
                  value={servingSize + ''}
                  onChange={handleSelectServingSize}
                  label='Enter serving size'
                  required
                  fullWidth
                  id='unit'
               >
                  {currentServingSizes.map((size) =>
                     size === 100 ? (
                        <MenuItem key={size} value={size}>
                           {size} {currentServingSizeUnit} (standardized serving
                           size)
                        </MenuItem>
                     ) : (
                        <MenuItem key={size} value={size}>
                           {size} {currentServingSizeUnit} ( 1 {currentModifier}
                           )
                        </MenuItem>
                     )
                  )}
               </Select>
            </FormControl>
         </Stack>
      </>
   );
};
