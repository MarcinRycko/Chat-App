import { dbConfig } from '../Config/db';
import mysql, { Pool } from 'mysql2';

export class Database {
  private pool: Pool;
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  public getMessages = async () => {
    try {
      const [messages] = await this.pool
        .promise()
        .query('SELECT * FROM messages');
      return messages;
    } catch {
      (err: Error) => {
        throw new Error(err.message);
      };
    }
  };

  public setMessages = async (newMessage: {
    username: string;
    message: string;
    createdAt: number;
    id: string;
  }) => {
    const { username, message, createdAt, id } = newMessage;
    try {
      await this.pool
        .promise()
        .query(
          `INSERT INTO messages (id, username, message, createdAt) VALUES (?, ?, ?, ?)`,
          [id, username, message, createdAt]
        );
    } catch {
      (err: Error) => {
        throw new Error(err.message);
      };
    }
  };
}
