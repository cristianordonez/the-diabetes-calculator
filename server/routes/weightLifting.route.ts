import { Request, RequestHandler, Response, Router } from 'express';
import {
   getInitWeightLiftingData,
   saveUserProgram,
} from '../controllers/weightLifting.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
   getInitWeightLiftingData(req, res) as unknown as RequestHandler;
});

router.post('/', (req: Request, res: Response) => {
   saveUserProgram(req, res) as unknown as RequestHandler;
});

export { router };
