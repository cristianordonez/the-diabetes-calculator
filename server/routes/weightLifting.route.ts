import { Request, RequestHandler, Response, Router } from 'express';
import {
   createUserProgram,
   getInitWeightLiftingData,
} from '../controllers/weightLifting.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {
   getInitWeightLiftingData(req, res) as unknown as RequestHandler;
});

//todo complete
router.post('/', (req: Request, res: Response) => {
   createUserProgram(req, res) as unknown as RequestHandler;
});

export { router };
