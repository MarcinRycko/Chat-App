import { TState, TAction } from './types';

export const ChatReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'HANDLE_USERNAME':
      return { ...state, username: action.payload };
    case 'HANDLE_MESSAGE_INPUT':
      return { ...state, messageInputValue: action.payload };
    case 'CLEAR_MESSAGE_INPUT_VALUE':
      return { ...state, messageInputValue: '' };
    case 'SET_USER_NAME':
      return { ...state, username: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    case 'SET_SERVER_MESSAGE':
      return { ...state, messages: [action.payload, ...state.messages] };
    case 'SET_USER_LIST':
      return { ...state, memberList: action.payload };
    default:
      throw new Error('Unknown type of action');
  }
};
