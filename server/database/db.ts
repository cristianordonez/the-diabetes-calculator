// get the client
// const mysql = require('mysql2/promise');
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   database: 'meal-planner',
});

export default connection;
