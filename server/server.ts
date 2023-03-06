import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import SocketController from './Controller/SocketController';
import UsersList from './Model/UserListModel';
import { Database } from './Model/DatabaseModel';
dotenv.config();

class ServerIO {
  private app: Express;
  private httpServer: http.Server;
  private port: string | number;
  public io: Server;

  constructor(port: number | string) {
    this.port = port;
    this.app = express();
    this.app.use(cors);
    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
  }

  public start() {
    this.httpServer.listen(this.port, (): void => {
      console.log('Server started...');
    });
  }
}

const socketServer = new ServerIO(process.env.PORT || 5000);
socketServer.start();

export const db = new Database();
export const usersList = new UsersList();

const io = new SocketController(socketServer.io);
io.socketStart();
