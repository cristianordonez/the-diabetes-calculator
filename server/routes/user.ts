// const express = require('express');
import * as express from 'express';
// const controllers = require('../controllers/user');
import * as controllers from '../controllers/user';
const router = express.Router();

//handles creating account
router.post('/', (req: any, res: any) => {
   controllers.create(req, res);
});

export default router;
