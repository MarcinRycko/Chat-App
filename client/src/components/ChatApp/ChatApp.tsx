import Header from '../Header/Header';
import useMemberList from '../../hooks/useMemeberList/useMemberList';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import MemberList from '../MemberList/MemberList';
import styles from './chatapp.module.scss';

const { wrapper, content, messages } = styles;

type ChatAppProps = {};

const ChatApp: React.FC<ChatAppProps> = () => {
  const { handleMemberListDisplay, isMemberListDisplayed } = useMemberList();

  return (
    <>
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
    </>
  );
};

export default ChatApp;
