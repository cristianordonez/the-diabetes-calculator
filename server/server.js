require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();
const compression = require('compression');

//MIDDLEWARE
app.use(compression());

// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//ROUTES
app.get('/', (req, res) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'template',
         version: '1.0.0',
      },
   });
});

app.get('/next', (req, res) => {
   res.send('next');
});
app.get('/test', (req, res) => {
   res.send('test');
});

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
