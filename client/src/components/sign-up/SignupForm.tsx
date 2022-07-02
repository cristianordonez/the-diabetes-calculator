import React, { useEffect, useState } from 'react';
import './SignupForm.scss';
import { Typography, Paper, Button } from '@mui/material';
import { MacroCalculatorForm } from '../macro-calculator-form';
import { ConfirmPasswordTextField } from '../text-fields/ConfirmPasswordTextField';
import { EmailTextField } from '../text-fields/EmailTextField';
import { PasswordTextField } from '../text-fields/PasswordTextField';
import { UsernameTextField } from '../text-fields/UsernameTextField';
import axios from 'axios';

export const SignupForm = ({
   showSignup,
   handleRedirectToSignup,
   error,
   setError,
   errorMessage,
   setErrorMessage,
   setOpenErrorAlert,
}: any) => {
   const [showNextPage, setShowNextPage] = useState(false); //handles showing page 2 when creating account

   const [signupValues, setSignupValues] = useState({
      username: '',
      email: '',
      password: '',
      confirmedPassword: '',
   });

   const handleCreateAccountChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSignupValues({
         ...signupValues,
         [event.target.name]: event.target.value,
      });
   };

   //handles turning off errors on textfield if user redirects here after submitting wrong credentials
   useEffect(() => {
      setError(false);
   }, []);

   const handleInitialSignupForm = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      if (signupValues.password !== signupValues.confirmedPassword) {
         setErrorMessage('Your passwords do not match');
         setOpenErrorAlert(true);
         setError(true);
      } else {
         try {
            let response: any = await axios.post(`/api/signup`, signupValues);
            setOpenErrorAlert(false);
            setShowNextPage(true);
         } catch (err: any) {
            console.log('err:', err);
            setErrorMessage(
               'An account with that username or email already exists. Try loggin in instead.'
            );
            setOpenErrorAlert(true);
         }
      }
   };

   //after user is created, navigate to the next page with successful response
   return (
      <>
         {showNextPage ? (
            <MacroCalculatorForm />
         ) : (
            <Paper
               onSubmit={handleInitialSignupForm}
               component={'form'}
               className='signup-form'
            >
               <Typography variant='h6'>Create an account</Typography>
               <Typography variant='subtitle1'>
                  Please enter your details
               </Typography>
               <UsernameTextField
                  showSignup={showSignup}
                  handleCreateAccountChange={handleCreateAccountChange}
               />
               <EmailTextField
                  handleCreateAccountChange={handleCreateAccountChange}
               />
               <PasswordTextField
                  error={error}
                  showSignup={showSignup}
                  handleCreateAccountChange={handleCreateAccountChange}
                  errorMessage={errorMessage}
               />
               <ConfirmPasswordTextField
                  errorMessage={errorMessage}
                  error={error}
                  handleCreateAccountChange={handleCreateAccountChange}
               />
               <Button type='submit' fullWidth variant='contained'>
                  Create Account
               </Button>

               <Button variant='text' onClick={handleRedirectToSignup}>
                  <Typography
                     align='center'
                     className='signup-form-text'
                     variant='caption'
                  >
                     Go back
                  </Typography>
               </Button>
            </Paper>
         )}
      </>
   );
};
