import { Server, Socket } from 'socket.io';
import { usersList } from '../server';
import { MessageModel } from '../Model/MessageModel/MessageModel';
import { IMessageModel } from '../Model/MessageModel/types';
import { v4 as uuidv4 } from 'uuid';

export class ConnectionController {
  private socket: Socket;
  private io: Server;
  private messagesDB: IMessageModel;
  constructor(socket: Socket, io: Server) {
    this.socket = socket;
    this.io = io;
    this.messagesDB = new MessageModel();
  }
  public connectionStart = async () => {
    this.socket.on('join', this.handleUserJoin);
    this.socket.on('sendMessage', this.handleMessage);
    this.socket.on('disconnect', this.handleDisconnect);
    try {
      const messages = await this.messagesDB.getMessages();
      this.io.emit('getMessages', JSON.stringify(messages));
    } catch {
      (err: Error) => {
        throw new Error(err.message);
      };
    }
  };

  private handleMessage = async (message: string) => {
    try {
      await this.messagesDB.setMessages(JSON.parse(message));
      const messages = await this.messagesDB.getMessages();
      this.io.emit('getMessages', JSON.stringify(messages));
    } catch {
      (err: Error) => {
        throw new Error(err.message);
      };
    }
  };

  private handleUserJoin = (username: string) => {
    if (usersList.isUserExist(this.socket.id)) {
      usersList.updateUserName(this.socket.id, username);
    } else {
      usersList.addUser(this.socket.id, username);
      this.handleMessage(
        JSON.stringify({
          username: 'Server',
          message: `${username} just joined a server`,
          createdAt: Date.now(),
          id: uuidv4(),
        })
      );
    }
    this.io.emit('userListUpdate', usersList.usersList);
  };

  private handleDisconnect = () => {
    const username = usersList.findUser(this.socket.id)?.username;
    this.handleMessage(
      JSON.stringify({
        username: 'Server',
        message: `${username} just leaved a server`,
        createdAt: Date.now(),
        id: uuidv4(),
      })
    );
    usersList.removeUser(this.socket.id);
    this.io.emit('userListUpdate', usersList.usersList);
  };
}
