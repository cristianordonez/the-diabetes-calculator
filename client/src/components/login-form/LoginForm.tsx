import React, { useState } from 'react';
import './LoginForm.scss';
import LoginImage from '../../../img/healthy-eating.svg';
import { Grid, Stack, Paper, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { PasswordTextField } from '../text-fields/password-textfield/PasswordTextField';
import { UsernameTextField } from '../text-fields/username-textfield/UsernameTextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = ({
   showSignup,
   handleRedirectToSignup,
   showTextFieldError,
   setShowTextFieldError,
   errorMessage,
   setErrorMessage,
   handleErrorAlert,
}: any) => {
   const navigate = useNavigate();

   const [loginValues, setLoginValues] = useState({
      username: '',
      password: '',
   });

   const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginValues({
         ...loginValues,
         [event.target.name]: event.target.value,
      });
   };

   const handleLogin = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      try {
         let response = await axios.post(`http://localhost:8080/api/login`, loginValues);
         console.log('response: ', response)
         if (response.status === 200) {
            setShowTextFieldError(false);
            navigate(`/search`, { replace: true });
         }
      } catch (err: any) {
         setErrorMessage('No matching username and password found.'); //showTextFieldError message used in the snackbar
         setShowTextFieldError(true); //used to show showTextFieldError helper text in text field
         handleErrorAlert();
         console.log('err:', err);
      }
   };

   return (
      <>
         <Grid container>
            <Grid item xs={0} md={6}>
               <img src={LoginImage} />
            </Grid>
            <Grid item xs={12} md={6}>
               <Paper
                  component={'form'}
                  onSubmit={handleLogin}
                  className='login-form'
               >
                  <Typography variant='h6'>Welcome Back...</Typography>
                  <Typography variant='subtitle1'>
                     Please enter your details
                  </Typography>
                  <UsernameTextField
                     showSignup={showSignup}
                     handleLoginChange={handleLoginChange}
                  />
                  <PasswordTextField
                     showTextFieldError={showTextFieldError}
                     showSignup={showSignup}
                     errorMessage={errorMessage}
                     handleLoginChange={handleLoginChange}
                  />
                  <Button
                     data-testid='login-btn'
                     type='submit'
                     fullWidth
                     variant='contained'
                  >
                     Log In
                  </Button>
                  <Stack direction='row'>
                     <Typography
                        className='login-form-account-text'
                        variant='caption'
                     >
                        Don't have an account yet?{' '}
                     </Typography>
                     <Button variant='text' onClick={handleRedirectToSignup}>
                        <Typography
                           align='center'
                           data-testid='create-account-btn'
                           className='login-form-text'
                           variant='caption'
                        >
                           Create Account
                        </Typography>
                     </Button>
                  </Stack>
               </Paper>
            </Grid>
         </Grid>
      </>
   );
};
