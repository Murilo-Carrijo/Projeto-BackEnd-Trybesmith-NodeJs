import { Pool } from 'mysql2/promise';
import User from '../interface/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async add(user: User) {
    const { username, classe, level, password } = user;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}