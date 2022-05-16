import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import User from '../interface/user.interface';

const secret = 'seusecretdetoken';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async add(user: User) {
    await this.model.add(user);
    const token = jwt.sign({ data: user }, secret, { expiresIn: '7d' });
    return token;
  }
}