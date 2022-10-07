import { Divider, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
interface Props {
   inputValue: string;
   handleInputChange: React.ChangeEventHandler;
   title: 'Brand name' | 'Description';
   id: string;
}

export const CreateFoodTextInput = ({
   inputValue,
   handleInputChange,
   title,
   id,
}: Props) => {
   return (
      <>
         <Divider />
         <Stack
            alignItems='center'
            direction={'row'}
            spacing={2}
            sx={{ pl: '1rem', pr: '1rem' }}
         >
            <Typography variant='body2'>{title}</Typography>
            <TextField
               sx={{ flexGrow: '1' }}
               id={id}
               label={title === 'Brand name' ? 'Optional' : 'Required'}
               value={inputValue}
               onChange={handleInputChange}
            />
         </Stack>
      </>
   );
};
