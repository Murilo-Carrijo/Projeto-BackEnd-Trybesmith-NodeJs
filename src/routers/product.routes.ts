import { Router } from 'express';
import ProductControllet from '../controller/product.controller.ts';
import validateBody from '../middleware/product.middleware';

const router = Router();

const produtController = new ProductControllet();

router.get('/products', produtController.getAll);
router.post(
  '/products',
  validateBody,
  produtController.add,
);

export default router;