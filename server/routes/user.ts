import * as express from 'express';
import * as controllers from '../controllers/user';
const router = express.Router();

//handles creating account
router.post('/', (req: any, res: any) => {
   console.log('req.body:', req.body);
   controllers.create(req, res);
});

export default router;
