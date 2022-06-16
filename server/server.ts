require('dotenv').config();
// const path = require('path');

// const express = require('express');
import path from 'path';
import express from 'express';
// const bodyParser = require('body-parser');
const port = 8080;
// const compression = require('compression');
// const user = require('./routes/user');
import bodyParser from 'body-parser';
const app = express();
import compression from 'compression';
import user from './routes/user';

//MIDDLEWARE
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//ROUTES
app.use('/user', user);

app.get('/', (req: any, res: any) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'Diabetes Meal Plan',
         version: '1.0.0',
      },
   });
});

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
