import { Request, Response, NextFunction } from 'express';
import Product from '../interface/product.interface';

function validateData(name: string, amount: string) {
  if (amount.length < 3) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  if (typeof amount !== 'string') {
    const message = '"amount" must be a string'; 
    return ({ status: 422, message });
  }

  if (name.length < 3) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string'; 
    return ({ status: 422, message });
  }

  return null;
}

export default function validateBody(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as Product;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  const error = validateData(name, amount);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}