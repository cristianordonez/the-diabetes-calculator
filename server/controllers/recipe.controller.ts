//#connects server to the models
import express from 'express';
import * as apiHelpers from '../API/api';

const getRecipes = async function (
   req: express.Request,
   res: express.Response
) {
   try {
      let recipes = await apiHelpers.getSpoonacularRecipes(req.body);
      res.send(recipes);
   } catch (err) {
      console.log('err:', err);
      res.status(400).send('Could not get recipes.');
   }
};

export { getRecipes };
