import { Request, Response, Router } from 'express';
import {
   getFoodItemsAdvanced,
   getFoodItemsAdvancedByBrand,
   getFoodItemsSimple,
   getFoodItemsSimpleByBrand,
} from '../controllers/food.controller';

const router = Router();

router.get('/all', (req: Request, res: Response) => {
   getFoodItemsSimple(req, res);
});

router.get('/all/brand', (req: Request, res: Response) => {
   getFoodItemsSimpleByBrand(req, res);
});

router.get('/', (req: Request, res: Response) => {
   getFoodItemsAdvanced(req, res);
});

router.get('/brand', (req: Request, res: Response) => {
   getFoodItemsAdvancedByBrand(req, res);
});

export { router };
