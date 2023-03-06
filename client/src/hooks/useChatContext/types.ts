export type TMessage = {
  username: string;
  message: string;
  createdAt: number;
  id: string;
};
export type TUser = {
  username: string;
  id: string;
};

export type TState = {
  username: string;
  messageInputValue: string;
  messages: TMessage[];
  memberList: TUser[];
};

export type TAction =
  | { type: 'HANDLE_USERNAME'; payload: string }
  | { type: 'HANDLE_MESSAGE_INPUT'; payload: string }
  | { type: 'CLEAR_MESSAGE_INPUT_VALUE' }
  | { type: 'SET_USER_NAME'; payload: string }
  | { type: 'SET_MESSAGES'; payload: TMessage[] }
  | { type: 'SET_SERVER_MESSAGE'; payload: TMessage }
  | { type: 'SET_USER_LIST'; payload: TUser[] };
