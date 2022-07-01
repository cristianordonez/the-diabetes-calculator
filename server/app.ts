require('dotenv').config();
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import passport from 'passport';

import { router as authRoute } from './routes/auth.route';
import { router as recipesRoute } from './routes/recipe.route';
import { router as menuItemsRoute } from './routes/menuitems.route';
import { router as groceryProductsRoute } from './routes/groceryproducts.route';
import { Strategy as LocalStrategy } from 'passport-local';
import { db } from './database/db';
// import pgSession from 'connect-pg-simple';

import bcrypt from 'bcrypt';
const pgSession = require('connect-pg-simple')(session);
const app = express();

//MIDDLEWARE
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const database =
   process.env.NODE_ENV === 'test' ? 'mealplans-test' : 'mealplans';

const conObject = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   host: process.env.HOST, // or whatever it may be
   port: 5432,
   database: database,
};

const test = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:5432/${database}`;
console.log('test:', test);
const pgStoreConfig = {
   conObject: conObject,
   // conString: `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:5432/${database}`,
   // conObject: conObject,// or this,
   // pool: new (require('pg').Pool({ /* pool options here*/}))// or this
};

app.use(
   session({
      store: new pgSession(pgStoreConfig),
      secret: `${process.env.SESSION_SECRET}`,
      saveUninitialized: true,
      resave: true,
      cookie: {
         secure: false,
         maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
      },
   })
);

app.use(passport.initialize());
app.use(passport.session());

// passport.use(
//    new LocalStrategy((username, password, cb) => {
//       console.log('here in new local strategy');
//       db.query(
//          `SELECT id, username, hash, email FROM users WHERE username=${username}`,

//          (err: any, result: any) => {
//             if (err) {
//                console.log('err in new local strategt:', err);
//                return cb(err);
//             }
//             if (result.rows.length > 0) {
//                const first = result.rows[0];
//                bcrypt.compare(password, first.hash, function (err, res) {
//                   if (res) {
//                      cb(null, {
//                         id: first.id,
//                         username: first.username,
//                         // email: first.email,
//                      });
//                   } else {
//                      console.log('err in bcrypt:', err);
//                      cb(null, false, { message: 'bad password' });
//                   }
//                });
//             } else {
//                cb(null, false);
//             }
//          }
//       );
//    })
// );

passport.use(
   new LocalStrategy((username, password, cb) => {
      db.query(
         `SELECT id, username, hash, email FROM users WHERE username='${username}'`
      )
         .then(function (result: any) {
            if (result.length) {
               const first = result[0];
               bcrypt.compare(password, first.hash, function (err, res) {
                  if (res) {
                     cb(null, {
                        id: first.id,
                        username: first.username,
                     });
                  } else {
                     cb(null, false, { message: 'Incorrect password' });
                  }
               });
            }
         })
         .catch(function (err: any) {
            console.log('err in passport use local strategy:', err);
            return cb(err);
         });
   })
);

//determines which data of user object should be stored in session to be accessed
// below in the deserializeUser function
passport.serializeUser((user: any, done) => {
   console.log('here in serialize user');
   console.log('user:', user);
   done(null, user.id);
});

// passport.deserializeUser((id: string, cb) => {
//    console.log('here in deserialize user');

//    db.query(
//       'SELECT id, username, email, spoonacular_username FROM users WHERE id = $1',
//       [parseInt(id, 10)],
//       (err: any, results: any) => {
//          if (err) {
//             console.log('err in deserialize user:', err);
//             return cb(err);
//          } else {
//             cb(null, results.rows[0]);
//          }
//       }
//    );
// });

passport.deserializeUser((id: string, cb) => {
   db.query(
      `SELECT id, username, email, spoonacular_username FROM users WHERE id=${id}`
   )
      .then(function (results: any) {
         cb(null, results[0]);
      })
      .catch(function (err: any) {
         console.log('err in deserialize user:', err);
         return cb(err);
      });
});

//ROUTES
app.use('/api', authRoute);
app.use('/api/recipes', recipesRoute);
app.use('/api/menuItems', menuItemsRoute);
app.use('/api/groceryProducts', groceryProductsRoute);

export default app; //export to be used for tests and in server.js
