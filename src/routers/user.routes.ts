import { Router } from 'express';
import UserController from '../controller/user.controller';
import validateUserBody from '../middleware/user.middleware';

const router = Router();

const userController = new UserController();

router.post(
  '/users',
  validateUserBody,
  userController.add,
);

export default router;
