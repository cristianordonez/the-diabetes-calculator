import { Request, RequestHandler, Response, Router } from 'express';
import { getPrograms } from '../controllers/weightLifting.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {
   getPrograms(req, res) as unknown as RequestHandler;
});

export { router };
