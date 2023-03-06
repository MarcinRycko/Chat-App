import { useMessagesContext } from '../../context/hooks';
import Message from '../Message/Message';
import styles from './messagelist.module.scss';

const { wrapper } = styles;

const MessageList: React.FC = () => {
  const { messages } = useMessagesContext();

  return (
    <>
      <div className={wrapper}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </div>
    </>
  );
};

export default MessageList;
