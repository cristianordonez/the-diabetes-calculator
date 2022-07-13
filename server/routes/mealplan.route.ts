import { Request, Response, Router } from 'express';
import * as mealplanController from '../controllers/mealplan.controller';
const router = Router();

//handles adding item to mealplan
router.post('/', (req: Request, res: Response) => {
   mealplanController.addMealPlanItem(req, res);
});


//handles getting the mealplan day
router.get('/day', (req: Request, res: Response) => {
   mealplanController.getMealPlanDay(req, res);
});

//handles getting the mealplan week
router.get('/week', (req: Request, res: Response) => {
   mealplanController.getMealPlanWeek(req, res);
});

//handles deleting item from user mealplan
router.delete('/', (req: Request, res: Response) => {
   mealplanController.deleteMealPlanItem(req, res);
});


export { router };
