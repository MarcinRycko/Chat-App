import io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { ChatContextProvider } from '../../Context/ChatContextProvider';
import Header from '../../components/chat/Header/Header';
import useMemberList from '../../hooks/useMemeberList/useMemberList';
import MessageList from '../../components/chat/MessageList/MessageList';
import MessageInput from '../../components/chat/MessageInput/MessageInput';
import MemberList from '../../components/chat/MemberList/MemberList';
import styles from './chat.module.scss';

const { wrapper, content, messages } = styles;

const socket: Socket = io(`http://${window.location.hostname}:5000`);

const Chat: React.FC = () => {
  const { handleMemberListDisplay, isMemberListDisplayed } = useMemberList();

  return (
    <>
      <ChatContextProvider socket={socket}>
        <div className={wrapper}>
          <Header handleMemberListDisplay={handleMemberListDisplay} />
          <div className={content}>
            <div className={messages}>
              <MessageList />
              <MessageInput />
            </div>
            <MemberList isMemberListDisplayed={isMemberListDisplayed} />
          </div>
        </div>
      </ChatContextProvider>
    </>
  );
};

export default Chat;
