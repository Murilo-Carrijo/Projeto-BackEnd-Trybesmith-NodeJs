import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductControllet {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}