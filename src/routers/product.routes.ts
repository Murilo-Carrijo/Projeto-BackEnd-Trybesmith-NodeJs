import { Router } from 'express';
import ProductControllet from '../controller/product.controller.ts';

const router = Router();

const produtController = new ProductControllet();

router.get('/products', produtController.getAll);

export default router;