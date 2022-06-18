//#connects server to the models
import express from 'express';
import * as apiHelpers from '../API/api';

const getGroceryProducts = async function (
   req: express.Request,
   res: express.Response
) {
   try {
      let groceryProducts = await apiHelpers.getSpoonacularGroceryProducts(
         req.body
      );
      console.log('groceryProducts:', groceryProducts);
      res.send(groceryProducts);
   } catch (err) {
      console.log('err:', err);
      res.status(400).send('Could not get grocery products.');
   }
};

export { getGroceryProducts };
