import React, { useState } from 'react';
import './LoginForm.scss';
import LoginImage from '../../../img/healthy-eating.svg';
import { Typography, Stack, Divider, Grid, Paper, Button } from '@mui/material';
import { PasswordTextField } from '../text-fields/password-textfield/PasswordTextField';
import { UsernameTextField } from '../text-fields/username-textfield/UsernameTextField';
import { useNavigate } from 'react-router-dom';
import LoginSvg from '../../../img/secure_login.svg';
import GoogleIcon from '@mui/icons-material/Google';
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
         let response = await axios.post(`/api/login`, loginValues, {
            withCredentials: true,
         }); //! when using http://localhost:8080/api/login route sessions were not saved
         if (response.status === 200) {
            setShowTextFieldError(false);
            navigate(`/search`, { replace: true });
         }
      } catch (err: any) {
         setErrorMessage('No matching username and password found.'); //showTextFieldError message used in the snackbar
         setShowTextFieldError(true); //used to show showTextFieldError helper text in text field
         handleErrorAlert();
      }
   };

   return (
      <>
         <div className='login-form'>
            <img src={LoginSvg} />
            <div className='login-form-card'>
               <Paper
                  component={'form'}
                  elevation={2}
                  onSubmit={handleLogin}
                  className='login-form-input'
               >
                  <Typography variant='h6'>Log in</Typography>
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
            </div>
            {/* </Grid> */}
         </div>
      </>
   );
};
