import { useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialState } from './initialState';
import { ChatReducer } from './ChatReducer';
import { Socket } from 'socket.io-client';
import { TUser, TMessage } from './types';
import { getUsername } from '../../utils/getUsername';

export const useChat = (socket: Socket) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);

  const handleUsername = (e: React.SyntheticEvent, newUsername: string) => {
    e.preventDefault();
    dispatch({ type: 'HANDLE_USERNAME', payload: newUsername });
    localStorage.setItem('username', newUsername);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_MESSAGE_INPUT', payload: e.target.value });
  };

  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (state.messageInputValue.trimEnd()) {
      const newMessage: TMessage = {
        username: state.username,
        message: state.messageInputValue,
        createdAt: Date.now(),
        id: uuidv4(),
      };
      socket.emit('sendMessage', JSON.stringify(newMessage));
      dispatch({ type: 'CLEAR_MESSAGE_INPUT_VALUE' });
    }
  };

  useEffect(() => {
    dispatch({ type: 'SET_USER_NAME', payload: getUsername() });
  }, []);

  useEffect(() => {
    socket.on('connect_error', () => {
      dispatch({
        type: 'SET_SERVER_MESSAGE',
        payload: {
          username: 'Server',
          message: 'Connection error',
          createdAt: Date.now(),
          id: uuidv4(),
        },
      });
    });

    socket.on('getMessages', (messages: string) => {
      dispatch({
        type: 'SET_MESSAGES',
        payload: JSON.parse(messages).reverse(),
      });
    });

    socket.on('userListUpdate', (memberList: TUser[]) => {
      dispatch({ type: 'SET_USER_LIST', payload: memberList });
    });

    return () => {
      socket.off('getMessages');
      socket.off('userListUpdate');
      socket.off('connect_error');
    };
  }, [socket]);

  useEffect(() => {
    if (state.username) {
      socket.emit('join', state.username);
    }
  }, [state.username, socket]);

  return {
    state,
    methods: {
      handleUsername,
      handleInput,
      handleSendMessage,
    },
  };
};
