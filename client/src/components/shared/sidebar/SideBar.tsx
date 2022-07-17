//shared sidebar
import React, { ReactNode } from 'react';
import './Sidebar.scss';
import { DailyGoals } from '../daily-goals';
import { IconButton, Toolbar, Drawer } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CurrentGoals } from '../../sidebar-searchpage/SideBarSearchPage';

interface Props {
   mobileOpen: boolean | undefined;
   handleDrawerToggle: any;
   SearchFormComponent?: ReactNode;
   apiData?: never[];
   goals?: CurrentGoals | any;
   page: string;
   nutritionSummary?: any;
   mealplanItemsFound?: boolean;
}

const drawerWidth = 350;

export const SideBar = ({
   mobileOpen,
   handleDrawerToggle,
   SearchFormComponent,
   apiData,
   goals,
   page,
   nutritionSummary,
   mealplanItemsFound,
}: Props) => {
   return (
      <>
         {page === 'search' && (
            <>
               <Drawer
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                     display: { xs: 'block', sm: 'none' },
                     '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        pt: '100px',
                     },
                  }}
               >
                  <Toolbar>
                     <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                     >
                        <ArrowBackIosIcon />
                     </IconButton>
                  </Toolbar>
                  {apiData !== undefined && apiData.length ? (
                     SearchFormComponent
                  ) : (
                     <DailyGoals goals={goals} page={'search'} />
                  )}
               </Drawer>

               <Drawer
                  open
                  variant='permanent'
                  ModalProps={{ keepMounted: true }}
                  sx={{
                     display: { xs: 'none', sm: 'block' },
                     '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        pt: '100px',
                     },
                  }}
               >
                  {apiData !== undefined && apiData.length ? (
                     SearchFormComponent
                  ) : (
                     <DailyGoals goals={goals} page={'search'} />
                  )}
               </Drawer>
            </>
         )}
         {page === 'mealplan' && goals !== undefined && (
            <>
               <Drawer
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                     display: { xs: 'block', sm: 'none' },
                     '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        pt: '100px',
                     },
                  }}
               >
                  <Toolbar>
                     <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                     >
                        <ArrowBackIosIcon />
                     </IconButton>
                  </Toolbar>
                  {/* MOBILE */}
                  {nutritionSummary ? (
                     <DailyGoals
                        goals={goals}
                        nutritionSummary={nutritionSummary}
                        page={'mealplan'}
                     />
                  ) : null}
               </Drawer>

               <Drawer
                  open
                  variant='permanent'
                  ModalProps={{ keepMounted: true }}
                  sx={{
                     display: { xs: 'none', sm: 'block' },
                     '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        pt: '100px',
                     },
                  }}
               >
                  {/* DESKTOP - RENDER WHOLE VIEW AT ONCE */}
                  {nutritionSummary.length ? (
                     <DailyGoals
                        goals={goals}
                        nutritionSummary={nutritionSummary}
                        page={'mealplan'}
                     />
                  ) : null}
                  {/* SHOWN ON DAYS WITH NO MEALPLANS */}
                  {!nutritionSummary.length && !mealplanItemsFound ? (
                     <DailyGoals goals={goals} page={'search'} />
                  ) : null}
               </Drawer>
            </>
         )}
      </>
   );
};
