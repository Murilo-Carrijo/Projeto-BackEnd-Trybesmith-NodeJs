import { Pool } from 'mysql2/promise';
import Order from '../interface/order.interface';
import ProductModel from './produtct.model';

export default class OrderModel {
  public connection: Pool;

  public product: ProductModel;

  constructor(connection: Pool) {
    this.connection = connection;
    this.product = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Orders;');
    const [rows] = result;    
    return rows as Order[];
  }
}
