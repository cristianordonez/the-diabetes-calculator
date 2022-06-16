//# connects controllers to the database

import db from '../database/db';

type User = {
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   spoonacular_username: string;
   spoonacular_password: string;
   spoonacular_hash: string;
   hash: string;
   id_user: string;
};

//creates a new user and stores in database;
const create = (user: User) => {
   const createQuery = `INSERT INTO users (username, first_name, last_name, email, spoonacular_username, spoonacular_password, spoonacular_hash, hash, id_user) VALUES ('${user.username}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.spoonacular_username}', '${user.spoonacular_password}', '${user.spoonacular_hash}', '${user.hash}', '${user.id_user}')`;
   return db.promise().query(createQuery);
   // promise.then((response) => {
   //    console.log('response:', response);
   //    return response;
   // });
   // promise.catch((err) => {
   //    console.log('err:', err);
   //    return err;
   // });
};

//check if user already exists by their email address
const get = (email: string) => {
   const getQuery = `select * from users where email = '${email}'`;
   return db.promise().query(getQuery);
};

export { create, get };
