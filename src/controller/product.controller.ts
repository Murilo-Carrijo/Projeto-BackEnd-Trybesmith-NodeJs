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

  public add = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.service.add(product);
    
    return res.status(201).json(newProduct);
  };
}