import React, { forwardRef, useEffect } from 'react';
import './Navbar.scss';
import { NavLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useLocalStorageState } from '../../hooks/useLocalStorage';

export const CustomNavLink = React.forwardRef<any, any>((props, ref) => {
   const { href, ...other } = props;
   // Map href (MUI) -> to (react-router)
   const [colorMode, setColorMode] = useLocalStorageState('mode', 'dark');

   useEffect(() => {}, [colorMode]);

   if (colorMode === 'dark') {
      return (
         <NavLink
            ref={ref}
            to={href}
            {...other}
            className={({ isActive }) =>
               isActive ? 'active-dark' : 'inactive-dark'
            }
         />
      );
   } else {
      return (
         <NavLink
            ref={ref}
            to={href}
            {...other}
            className={({ isActive }) =>
               isActive ? 'active-light' : 'inactive-light'
            }
         />
      );
   }
});
