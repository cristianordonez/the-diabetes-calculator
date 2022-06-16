//#connects server to the models

import bcrypt from 'bcrypt';
import * as models from '../models/user';
import * as apiHelpers from '../API/api';
import { v4 as uuidv4 } from 'uuid';
const saltRounds = 10;

type Body = {
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

const create = function (req: any, res: any) {
   //todo update function so that it also checks username entered
   // first check if user email or username already exists
   let checkIfUserExists = models.get(req.body.email);
   checkIfUserExists.then((doesExist: any) => {
      //if user does exist end the request
      if (doesExist[0].length) {
         res.status(400).send('An account already exists with the email.');
      } else {
         //otherwise, continue creating new user
         let spoonacularPromise = apiHelpers.connectUser(req.body);
         //create hash for the password to store in db
         spoonacularPromise.then((spoonacularAccount) => {
            bcrypt
               .hash(req.body.password, saltRounds)
               .then(function (hash: string) {
                  let user = req.body;
                  delete user.password;
                  user.spoonacular_username = spoonacularAccount.data.username;
                  user.spoonacular_password =
                     spoonacularAccount.data.spoonacularPassword;
                  user.spoonacular_hash = spoonacularAccount.data.hash;
                  user.hash = hash;
                  user.id_user = uuidv4();
                  //then, send data to model to store all info in db
                  let dbResponse = models.create(user);
                  dbResponse.then((res: any) => {
                     res.send('Success creating account!');
                  });
                  //there was an error saving user information into db
                  dbResponse.catch((err: any) => {
                     res.status(400).send(err);
                  });
               })
               //bcrypt error hashing password
               .catch((err: object) => {
                  console.log('err in outer catch block :', err);
               });
         });
         //if there is error connecting user to spoonacular account, send error to client
         spoonacularPromise.catch((err) => {
            res.status(400).send(err);
         });
      }
   });
   checkIfUserExists.catch((err: object) => {
      console.log('err in checking if user exists:', err);
   });
};

export { create };
