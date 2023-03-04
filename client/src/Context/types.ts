type TMessage = {
  username: string;
  message: string;
  createdAt: number;
  id: string;
};
type TUser = {
  username: string;
  id: string;
};

export type TUserNameContext = {
  username: string;
  handleUsername: (e: React.SyntheticEvent, newUsername: string) => void;
};
export type TMessageInputContext = {
  messageInputValue: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMessage: (e: React.SyntheticEvent) => void;
};
export type TMessagesContext = {
  messages: TMessage[];
};
export type TMemberListContext = {
  memberList: TUser[];
};
