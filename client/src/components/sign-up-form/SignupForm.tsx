import React, { useEffect, useState } from 'react';
import './SignupForm.scss';
import { Typography, Paper, Button } from '@mui/material';
import { MacroCalculatorForm } from '../shared/macro-calculator-form';
import { ConfirmPasswordTextField } from '../text-fields/confirm-password-textfield/ConfirmPasswordTextField';
import { EmailTextField } from '../text-fields/email-textfield/EmailTextField';
import { PasswordTextField } from '../text-fields/password-textfield/PasswordTextField';
import { UsernameTextField } from '../text-fields/username-textfield/UsernameTextField';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';

export const SignupForm = ({
   showSignup,
   setShowSignup,
   handleRedirectToSignup,
   showTextFieldError,
   setShowTextFieldError,
   errorMessage,
   setErrorMessage,
   setOpenErrorAlert,
   setAlertSeverity,
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
      console.log('event.target.name: ', event.target.name);
      setSignupValues({
         ...signupValues,
         [event.target.name]: event.target.value,
      });
   };

   //handles turning off errors on textfield if user redirects here after submitting wrong credentials
   useEffect(() => {
      setShowTextFieldError(false);
   }, []);

   const handleInitialSignupForm = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      if (signupValues.password !== signupValues.confirmedPassword) {
         setErrorMessage('Your passwords do not match');
         setOpenErrorAlert(true);
         setShowTextFieldError(true);
      } else {
         try {
            let response: any = await axios.post(`/api/signup`, signupValues);
            setOpenErrorAlert(false);
            setShowNextPage(true);
         } catch (err: any) {
            console.log('err:', err);
            setAlertSeverity('error');
            setErrorMessage(
               'An account with that username or email already exists. Try logging in instead.'
            );
            setOpenErrorAlert(true);
         }
      }
   };

   //after user is created, navigate to the next page with successful response
   return (
      <div className='signup'>
         {showNextPage ? (
            <MacroCalculatorForm
               setOpenErrorAlert={setOpenErrorAlert}
               setErrorMessage={setErrorMessage}
               setShowNextPage={setShowNextPage}
               setShowSignup={setShowSignup}
               setAlertSeverity={setAlertSeverity}
            />
         ) : (
            <Paper
               onSubmit={handleInitialSignupForm}
               component={'form'}
               className='signup-form'
               data-testid='signup-form'
            >
               <Typography variant='h6'>Create an account</Typography>
               <Button
                  variant='contained'
                  fullWidth
                  component='a'
                  color='error'
                  href='/api/login/federated/google'
               >
                  <GoogleIcon />
                  <Typography
                     variant='button'
                     align='right'
                     sx={{ marginLeft: '10px' }}
                  >
                     Sign in with Google
                  </Typography>
               </Button>
               <Typography variant='h6'>or</Typography>
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
                  showTextFieldError={showTextFieldError}
                  showSignup={showSignup}
                  handleCreateAccountChange={handleCreateAccountChange}
                  errorMessage={errorMessage}
               />
               <ConfirmPasswordTextField
                  errorMessage={errorMessage}
                  showTextFieldError={showTextFieldError}
                  handleCreateAccountChange={handleCreateAccountChange}
               />
               <Button
                  data-testid='initial-signup-form-btn'
                  type='submit'
                  fullWidth
                  variant='contained'
               >
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
      </div>
   );
};
