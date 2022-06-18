//#connects server to the models
import express from 'express';
import * as apiHelpers from '../API/api';

const getMenuItems = async function (
   req: express.Request,
   res: express.Response
) {
   try {
      let menuItems = await apiHelpers.getSpoonacularMenuItems(req.body);
      res.send(menuItems);
   } catch (err) {
      console.log('err:', err);
      res.status(400).send('Could not get menu items.');
   }
};

export { getMenuItems };
