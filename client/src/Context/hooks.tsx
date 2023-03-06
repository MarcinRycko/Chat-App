import { useContext } from 'react';
import {
  UserNameContext,
  MessageInputContext,
  MessagesContext,
  MemberListContext,
} from './ChatContextProvider';

export const useUserNameContext = () => {
  const contextValue = useContext(UserNameContext);
  if (contextValue === null) {
    throw Error('UserNameContext has not been Provided!');
  }
  return contextValue;
};
export const useMessageInputContext = () => {
  const contextValue = useContext(MessageInputContext);
  if (contextValue === null) {
    throw Error('MessageInputContext has not been Provided!');
  }
  return contextValue;
};
export const useMessagesContext = () => {
  const contextValue = useContext(MessagesContext);
  if (contextValue === null) {
    throw Error('MessagesContext has not been Provided!');
  }
  return contextValue;
};
export const useMemberListContext = () => {
  const contextValue = useContext(MemberListContext);
  if (contextValue === null) {
    throw Error('MemberListContext has not been Provided!');
  }
  return contextValue;
};
