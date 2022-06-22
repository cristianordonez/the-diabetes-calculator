import React from 'react';
import './FoodSearchItem.scss';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const FoodSearchItem = ({
   route,
   image,
   title,
   nutrition,
   description,
   price,
   ingredientList,
   restaurantChain,
   url,
}: any) => {
   //item that appears in every item is image, title, nutrition,

   return (
      <>
         <Grid item xs={12} sm={6} md={4} xl={3}>
            <Paper elevation={1} className='food-search-paper'>
               <Card className='search-item'>
                  <CardMedia
                     component='img'
                     alt='food item image'
                     height='160'
                     image={image}
                  />
                  <CardContent>
                     <Typography variant='overline'>{title}</Typography>
                     <div className='search-item-nutrition'>
                        <div className='search-item-nutrient'>
                           <Typography variant='subtitle2'>
                              <strong>Calories</strong>
                           </Typography>
                           <Typography variant='body1'>
                              {nutrition.calories || nutrition[0].amount}
                           </Typography>
                        </div>
                        <div className='search-item-nutrient'>
                           {' '}
                           <Typography variant='subtitle2'>
                              <strong>Carbs</strong>
                           </Typography>
                           <Typography variant='body1'>
                              {nutrition.carbs || nutrition[3].amount}
                           </Typography>
                        </div>
                        <div className='search-item-nutrient'>
                           {' '}
                           <Typography variant='subtitle2'>
                              <strong>Protein</strong>
                           </Typography>
                           <Typography variant='body1'>
                              {nutrition.protein || nutrition[8].amount}
                           </Typography>
                        </div>
                        <div className='search-item-nutrient'>
                           {' '}
                           <Typography variant='subtitle2'>
                              <strong>Fat</strong>
                           </Typography>
                           <Typography variant='body1'>
                              {nutrition.fat || nutrition[1].amount}
                           </Typography>
                        </div>
                     </div>
                  </CardContent>
                  <CardActions>
                     <Button variant='outlined'>
                        <AddShoppingCartIcon />
                        Add to Cart
                     </Button>
                  </CardActions>
               </Card>
            </Paper>
         </Grid>
      </>
   );
};

export default FoodSearchItem;
