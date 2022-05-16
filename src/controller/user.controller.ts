import { Request, Response } from 'express';
import UserService from '../service/user.service';
// import User from '../interface/user.interface';

export default class UserController {
  public server: UserService;

  constructor() {
    this.server = new UserService();
  }

  public add = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.server.add(user);
    return res.status(201).json({ token });
  };
}