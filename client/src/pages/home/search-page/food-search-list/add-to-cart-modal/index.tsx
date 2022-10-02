import {
   AlertColor,
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import getUnixTime from 'date-fns/getUnixTime';
import startOfToday from 'date-fns/startOfToday';
import React, {
   Dispatch,
   MouseEventHandler,
   SetStateAction,
   SyntheticEvent,
   useEffect,
   useState,
} from 'react';
import { AddToMealPlanType } from '../../../../../../../types/types';
import { DatePickerTextField } from './DatePickerTextField';
import { DialogSelectServings } from './DialogSelectServings';
import { DialogSelectSlot } from './DialogSelectSlot';
interface Props {
   openDialog: boolean;
   handleOpeningDialog: MouseEventHandler<HTMLButtonElement>;
   title: string;
   id: number;
   setOpenDialog: Dispatch<SetStateAction<boolean>>;
   setAlertMessage: Dispatch<SetStateAction<string>>;
   setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
   setAlertSeverity: Dispatch<SetStateAction<AlertColor>>;
}

export const AddToCartModal = ({
   openDialog,
   handleOpeningDialog,
   title,
   id,
   setOpenDialog,
   setAlertMessage,
   setOpenSnackbar,
   setAlertSeverity,
}: Props) => {
   const [data, setData] = useState<AddToMealPlanType>({
      date: getUnixTime(startOfToday()),
      slot: 1,
      position: 0, // the order in the slot
      category: '',
      fdc_id: id,
      servings: 1,
      title: title, //comes from props
   });

   const handleSelectSlot = (event: SelectChangeEvent) => {
      setData({ ...data, slot: parseInt(event.target.value) as 1 | 2 | 3 | 4 });
   };

   const handleSelectServings = (event: SelectChangeEvent) => {
      setData((data: AddToMealPlanType) => {
         return {
            ...data,
            servings: parseInt(event.target.value),
         };
      });
   };

   const handleSubmit = async (event: SyntheticEvent) => {
      event.preventDefault();
      try {
         await axios.post('/api/mealplan', data);
         setAlertSeverity('success');
         setAlertMessage('Item has been added to your mealplan!');
         setOpenSnackbar(true);
         setOpenDialog(false);
      } catch (err) {
         console.log(err);
      }
   };

   //listens to id so that it can update the data object when item is clicked
   useEffect(() => {
      setData((data: AddToMealPlanType) => {
         return {
            ...data,
            id,
            title,
         };
      });
   }, [id]);

   return (
      <Dialog open={openDialog}>
         <DialogTitle align='left'>
            Select preferred day, slot and number of servings
         </DialogTitle>
         <form onSubmit={handleSubmit}>
            <DialogContent>
               <Box
                  display='flex'
                  flexDirection='column'
                  gap='1rem'
                  // alignItems='flex-start'
               >
                  <DatePickerTextField setData={setData} data={data} />
                  <DialogSelectSlot
                     handleSelectSlot={handleSelectSlot}
                     slot={data.slot}
                  />
                  <DialogSelectServings
                     handleSelectServings={handleSelectServings}
                     servings={data.servings}
                  />
               </Box>
            </DialogContent>
            <DialogActions>
               <Button
                  data-testid='add-mealplan-btn'
                  aria-label='submit form to add to meal plan'
                  type='submit'
                  variant='contained'
               >
                  Submit
               </Button>
               <Button
                  variant='contained'
                  aria-label='cancel'
                  onClick={handleOpeningDialog}
                  color='error'
               >
                  Cancel
               </Button>
            </DialogActions>
         </form>
      </Dialog>
   );
};
