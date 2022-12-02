import { UserType } from '../../types/types';
import { db } from '../database/db';

const createUser = (user: UserType) => {
   const email = user.email.toLowerCase();
   try {
      const createQuery = `WITH getId AS 
          (INSERT INTO users (email) 
          VALUES ($1) 
          RETURNING user_id)
          INSERT INTO user_hash (user_id, hash)
          VALUES ((SELECT user_id FROM getId), $2) RETURNING user_id`;
      const dbResponse = db.one(createQuery, [email, user.password]);
      return dbResponse;
   } catch (err) {
      console.error(err);
      return err;
   }
};

const createGoogleUser = async (user: { email: string }) => {
   const email = user.email.toLowerCase();
   try {
      const createGoogleUserQuery = `INSERT INTO users (email) 
          VALUES ($1) 
          RETURNING user_id`;
      const createGoogleUserResponse = db.one(createGoogleUserQuery, [email]);
      return createGoogleUserResponse;
   } catch (err) {
      console.error(err);
      return err;
   }
};

const updatePassword = async (userId: number, password: string) => {
   try {
      const passwordQuery = `UPDATE user_hash SET hash=$1 WHERE user_id=$2`;
      const dbResponse = db.none(passwordQuery, [password, userId]);
      return dbResponse;
   } catch (err) {
      console.error(err);
      return err;
   }
};

const getUser = async (email: string) => {
   const lowerCaseEmail = email.toLowerCase();
   try {
      const getUserQuery = `SELECT email, user_id FROM users WHERE email=$1`;
      const user = db.oneOrNone(getUserQuery, lowerCaseEmail);
      return user;
   } catch (err) {
      console.error(err);
   }
};

const getHash = (email: string) => {
   const lowerCaseEmail = email.toLowerCase();
   const getHashQuery = `SELECT hash FROM user_hash
                         INNER JOIN users 
                         ON user_hash.user_id = users.user_id
                         WHERE email = $1`;
   const hash = db.oneOrNone(getHashQuery, lowerCaseEmail);
   return hash;
};

export { createUser, updatePassword, getHash, getUser, createGoogleUser };
