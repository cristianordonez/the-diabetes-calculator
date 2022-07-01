// import { Pool, Client } from 'pg';
const database =
   process.env.NODE_ENV === 'test' ? 'mealplans-test' : 'mealplans';

// console.log('db:', db);
// export const pool = new Pool({
//    user: process.env.USER,
//    host: process.env.HOST,
//    database: db,
//    password: process.env.PASSWORD,
//    port: 5432,
// });

const pgp = require('pg-promise')();

const cn = {
   user: process.env.USER,
   host: process.env.HOST,
   database: database,
   password: process.env.PASSWORD,
   port: 5432,
};
// const cn = `postgres://${process.env.user}:${process.env.PASSWORD}@${process.env.HOST}:5432/${database}`;

// Creating a new database instance from the connection details:
export const db = pgp(cn);
