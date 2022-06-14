//connects server to the models
// const models = require('../models/user');
// const apiHelpers = require('../API/API');
// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';
import * as models from '../models/user';
import * as apiHelpers from '../API/api';
const saltRounds = 10;

//store password in database
export const create = function (req: any, res: any) {
   //now make call to api to get new user information
   let spoonacularAccount = apiHelpers.connectUser(req.body);
   console.log('spoonacularAccount:', spoonacularAccount);
   bcrypt
      .hash(req.body.password, saltRounds)
      .then(function (hash: string) {
         console.log('hash:', hash);
      })
      .catch((err: object) => {
         //error hashing password
         console.log('err:', err);
      });
};
