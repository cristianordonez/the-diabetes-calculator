import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material'; //used to provide mui color theme to all components
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { PaletteMode } from '@mui/material';
import { getDesignTokens } from '../themes/theme';
import NavBar from '../components/navbar/NavBar';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import Home from './home/Home';

const SampleRecipePage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleRecipePage" */ './sample-recipe-page/SampleRecipePage'
      )
);

const SampleCalculatorPage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleCalculatorPage" */ './sample-app-calculator-page/SampleCalculatorPage'
      )
);

const SampleMealPlanPage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleMealPlanPage" */ './sample-app-mealplan-page/SampleMealPlanPage'
      )
);

const LoginPage = lazy(
   () => import(/* webpackChunkName: "LoginPage" */ './login-page/LoginPage')
);

const MacroCalculatorPage = lazy(
   () =>
      import(
         /* webpackChunkName: "MacroCalculatorPage" */ './macro-calculator-page/MacroCalculatorPage'
      )
);

const AuthProvider = lazy(
   () => import(/* webpackChunkName: "AuthProvider" */ '../context/authContext')
);

const MealPlanPage = lazy(
   () =>
      import(
         /* webpackChunkName: "MealPlanPage" */ './meal-plan-page/MealPlanPage'
      )
);

const SearchPage = lazy(
   () => import(/* webpackChunkName: "SearchPage" */ './search-page/SearchPage')
);

const NoPageFound = lazy(
   () => import(/* webpackChunkName: "NoPageFound" */ './404-page/404')
);

const UserSettingsPage = lazy(
   () =>
      import(
         /* webpackChunkName: "UserSettingsPage" */ './user-profile-page/UserProfilePage'
      )
);

const ForgotPasswordPage = lazy(
   () =>
      import(
         /* webpackChunkName: "ForgotPasswordPage" */ './forgot-password-page/ForgotPasswordPage'
      )
);

const ResetPasswordPage = lazy(
   () =>
      import(
         /* webpackChunkName: "ResetPage" */ './reset-password-page/ResetPasswordPage'
      )
);

export const ColorModeContext = React.createContext({
   toggleColorMode: () => {},
});

export const App = () => {
   const [mode, setMode] = useLocalStorageState('mode', 'dark');
   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
            // The dark mode switch would invoke this method
            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
            setMode((prevMode: PaletteMode) =>
               prevMode === 'light' ? 'dark' : 'light'
            );
         },
      }),
      []
   );

   let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
   theme = responsiveFontSizes(theme);

   return (
      <>
         <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
               <CssBaseline />
               <AuthProvider>
                  <NavBar />
                  <Suspense fallback={<></>}>
                     <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                           path='/diabetes-calculator-features/recipes'
                           element={<SampleRecipePage />}
                        />
                        <Route
                           path='/diabetes-calculator-features/calculator'
                           element={<SampleCalculatorPage />}
                        />
                        <Route
                           path='/diabetes-calculator-features/mealplan'
                           element={<SampleMealPlanPage />}
                        />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/search' element={<SearchPage />} />
                        <Route path='/mealplan' element={<MealPlanPage />} />
                        <Route
                           path='/macrocalculator'
                           element={<MacroCalculatorPage />}
                        />
                        <Route
                           path='/settings'
                           element={<UserSettingsPage />}
                        />
                        <Route
                           path='/account-recovery'
                           element={<ForgotPasswordPage />}
                        />

                        <Route
                           path='/passwordReset'
                           element={<ResetPasswordPage />}
                        />

                        <Route path='*' element={<NoPageFound />} />
                     </Routes>
                  </Suspense>
               </AuthProvider>
            </ThemeProvider>
         </ColorModeContext.Provider>
      </>
   );
};
