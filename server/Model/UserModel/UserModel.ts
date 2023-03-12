import { dbConfig } from '../../Config/db';
import mysql, { Pool } from 'mysql2';
import { IUser } from './types';

export class UserModel {
  private readonly pool: Pool;
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  public createUser = async (user: IUser) => {
    const { id, email, username, password, createdAt } = user;
    try {
      await this.pool
        .promise()
        .query(
          `INSERT INTO users (id, email, username, password, createdAt) VALUES (?, ?, ?, ?, ?)`,
          [id, email, username, password, createdAt]
        );
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  public getUserById = async (id: string) => {
    try {
      const [[user]] = await this.pool
        .promise()
        .query(`SELECT * FROM users WHERE id = ? LIMIT 1`, [id]);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  public getAllUsers = async () => {
    try {
      const [users] = await this.pool.promise().query(`SELECT * FROM users`);
      return users;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  public updateUser = async (id: string, updatedUserData: Partial<IUser>) => {
    const user = this.getUserById(id);

    if (!user) {
      return null;
    }

    const updatedUser = {
      ...user,
      ...updatedUserData,
    };

    try {
      const [users] = await this.pool
        .promise()
        .query(`UPDATE users SET username = ?, password = ? WHERE id = ?`, [
          updatedUser.username,
          updatedUser.password,
          id,
        ]);
      return users;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  public deleteUser = async (id: string) => {
    try {
      await this.pool.promise().query('DELETE FROM users WHERE id = ?', [id]);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };
}
