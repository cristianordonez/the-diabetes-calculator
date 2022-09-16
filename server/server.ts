require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const port = 3001;

//MIDDLEWARE
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const database =
//    process.env.NODE_ENV === 'test' ? 'mealplans_test' : 'mealplans';

// const conObject = {
//    user: process.env.DATABASE_USER,
//    password: process.env.DATABASE_PASSWORD,
//    host: process.env.DATABASE_HOST, // or whatever it may be
//    port: 5432,
//    database: database,
// };

// const pgStoreConfig = {
//    conObject: conObject,
// };

// //ROUTES
// app.get('/', (req: Request, res: Response) => {
//    res.status(200).json({
//       status: 'success',
//       data: {
//          name: 'Diabetes Meal Plan',
//          version: '1.0.1',
//       },
//    });
// });

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
