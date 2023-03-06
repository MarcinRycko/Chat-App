import { Server } from 'socket.io';
import { ConnectionController } from './ConnectionController';

export default class SocketController {
  private io: Server;
  constructor(io: Server) {
    this.io = io;
  }

  public socketStart() {
    this.io.on('connection', (socket) => {
      const newConnection = new ConnectionController(socket, this.io);
      newConnection.connectionStart();
    });
  }
}
