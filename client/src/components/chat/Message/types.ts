type TMessage = {
  username: string;
  message: string;
  createdAt: number;
  id: string;
};

export type MessageProps = {
  message: TMessage;
};
