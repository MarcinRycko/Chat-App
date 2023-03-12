export interface IMessage {
  username: string;
  message: string;
  createdAt: number;
  id: string;
}

export interface IMessageModel {
  getMessages: () => Promise<IMessage[]>;
  setMessages: (newMessage: IMessage) => Promise<void>;
}
