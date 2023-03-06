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
  const {
    state: { username, memberList, messages, messageInputValue },
    methods: { handleUsername, handleMessageInput, handleSendMessage },
  } = useChat(socket);

  const userNamevalue: TUserNameContext = useMemo(() => {
    return {
      username,
      handleUsername,
    };
  }, [username, handleUsername]);

  const memberListValue: TMemberListContext = useMemo(() => {
    return {
      memberList,
    };
  }, [memberList]);

  const messagesValue: TMessagesContext = useMemo(() => {
    return { messages };
  }, [messages]);

  const messageInputContextValue: TMessageInputContext = useMemo(() => {
    return {
      messageInputValue,
      handleMessageInput,
      handleSendMessage,
    };
  }, [messageInputValue, handleMessageInput, handleSendMessage]);

  return (
    <UserNameContext.Provider value={userNamevalue}>
      <MessageInputContext.Provider value={messageInputContextValue}>
        <MessagesContext.Provider value={messagesValue}>
          <MemberListContext.Provider value={memberListValue}>
            {children}
          </MemberListContext.Provider>
        </MessagesContext.Provider>
      </MessageInputContext.Provider>
    </UserNameContext.Provider>
  );
};
