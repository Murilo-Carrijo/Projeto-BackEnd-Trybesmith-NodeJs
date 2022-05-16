import OrderModel from '../models/order.model';
import ProductModel from '../models/produtct.model';
import connection from '../models/connection';
import Order from '../interface/order.interface';

export default class ProductService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();
    const product = order.map(({ id }) => this.productModel.getByOrderId(id));
    const awaitProduct = await Promise.all(product);
    const result = order.map((products, i) => (
      {
        ...products,
        productsIds: awaitProduct[i].map((p) => p.id),
      }
    ));
    return result;
  }
}