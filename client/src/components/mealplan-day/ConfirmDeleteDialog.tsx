import React, {MouseEventHandler, SyntheticEvent, Dispatch, SetStateAction} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    DialogActions,
    Button,
    AlertColor,
 } from '@mui/material';
 import axios from 'axios';

 interface Props {
    shoppingListId: number;
    openDialog: boolean;
    setOpenDialog:Dispatch<SetStateAction<boolean>>;
    handleOpeningDialog: MouseEventHandler<HTMLButtonElement>;
    setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
    setAlertSeverity: Dispatch<SetStateAction<AlertColor | undefined>>
    setAlertMessage: Dispatch<SetStateAction<string>>;
 }

export const ConfirmDeleteDialog = ({shoppingListId, openDialog, setOpenDialog, handleOpeningDialog, setOpenSnackbar, setAlertSeverity, setAlertMessage}: Props) => {
    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();
        console.log('id:', shoppingListId)
        setOpenSnackbar(true);
try {
    let response = await axios.delete(`/api/mealplan/delete/${shoppingListId}`)
    console.log('response in confirm delete', response);
    setAlertSeverity('success');
    setAlertMessage('Mealplan item has been deleted.')
    setOpenSnackbar(true);
    setOpenDialog(false);
} catch(err) {
    setAlertSeverity('error');
    setAlertMessage('Unable to delete mealplan item.')
    setOpenSnackbar(true);
    setOpenDialog(false);
    console.log(err)
}
    }
    return (
        <>
           <Dialog open={openDialog}>
         <DialogTitle>Are you sure you want to delete this item from your mealplan?</DialogTitle>
         <form onSubmit={handleDelete}>
            <DialogContent>
               <Box display='flex' flexDirection='column' gap='10px'>
                 
               </Box>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleOpeningDialog}>Cancel</Button>
               <Button data-testid='add-mealplan-btn' aria-label='submit form to add to meal plan' type='submit'>Delete</Button>
            </DialogActions>
         </form>
      </Dialog>
        </>
    )

}