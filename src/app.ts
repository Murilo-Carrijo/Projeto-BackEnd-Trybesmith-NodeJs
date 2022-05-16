import express from 'express';
import ProductRoutes from './routers/product.routes';
import UserRoutes from './routers/user.routes';
import OrderRoutes from './routers/order.routes';

const app = express();

app.use(express.json());
app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
