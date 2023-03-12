import { dbConfig } from '../../Config/db';
import mysql, { Pool } from 'mysql2';
import { IMessage, IMessageModel } from './types';

export class MessageModel implements IMessageModel {
  private readonly pool: Pool;
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  public getMessages = async () => {
    try {
      const [messages] = await this.pool
        .promise()
        .query('SELECT * FROM messages');
      return messages;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  public setMessages = async (newMessage: IMessage) => {
    const { username, message, createdAt, id } = newMessage;
    try {
      await this.pool
        .promise()
        .query(
          `INSERT INTO messages (id, username, message, createdAt) VALUES (?, ?, ?, ?)`,
          [id, username, message, createdAt]
        );
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };
}
