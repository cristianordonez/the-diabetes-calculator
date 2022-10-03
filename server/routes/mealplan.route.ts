import { Request, Response, Router } from 'express';
import {
   addMealPlanItem,
   deleteMealPlanItem,
   getMealPlanDay,
   getMealPlanWeek,
} from '../controllers/mealplan.controller';

const router = Router();

router.post('/', (req: Request, res: Response) => {
   addMealPlanItem(req, res);
});

router.get('/day', (req: Request, res: Response) => {
   getMealPlanDay(req, res);
});

router.get('/week', (req: Request, res: Response) => {
   getMealPlanWeek(req, res);
});

router.delete('/delete/:id', (req: Request, res: Response) => {
   deleteMealPlanItem(req, res);
});

export { router };
