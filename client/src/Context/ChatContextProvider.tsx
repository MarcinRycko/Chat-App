import { createContext, ReactNode, useMemo } from 'react';
import { useChat } from '../hooks/useChatContext/useChat';
import { Socket } from 'socket.io-client';
import {
  TUserNameContext,
  TMemberListContext,
  TMessageInputContext,
  TMessagesContext,
} from './types';

export const UserNameContext = createContext<TUserNameContext | null>(null);
export const MessageInputContext = createContext<TMessageInputContext | null>(
  null
);
export const MessagesContext = createContext<TMessagesContext | null>(null);
export const MemberListContext = createContext<TMemberListContext | null>(null);

export const ChatContextProvider = ({
  children,
  socket,
}: {
  children: ReactNode;
  socket: Socket;
}) => {
  const { state, methods } = useChat(socket);

  const userNamevalue: TUserNameContext = useMemo(() => {
    return {
      username: state.username,
      handleUsername: methods.handleUsername,
    };
  }, [state.username]);

  const memberListValue: TMemberListContext = useMemo(() => {
    return {
      memberList: state.memberList,
    };
  }, [state.memberList]);

  const messagesValue: TMessagesContext = useMemo(() => {
    return { messages: state.messages };
  }, [state.messages]);

  const messageInputValue: TMessageInputContext = useMemo(() => {
    return {
      messageInputValue: state.messageInputValue,
      handleInput: methods.handleInput,
      handleSendMessage: methods.handleSendMessage,
    };
  }, [state.messageInputValue]);

  return (
    <UserNameContext.Provider value={userNamevalue}>
      <MessageInputContext.Provider value={messageInputValue}>
        <MessagesContext.Provider value={messagesValue}>
          <MemberListContext.Provider value={memberListValue}>
            {children}
          </MemberListContext.Provider>
        </MessagesContext.Provider>
      </MessageInputContext.Provider>
    </UserNameContext.Provider>
  );
};
