import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { getDate } from '../../utils/getDate';
import { MessageProps } from './types';
import styles from './message.module.scss';

const {
  wrapper,
  iconWrapper,
  icon,
  contentWrapper,
  messageHeader,
  messageText,
  messageTextServer,
  userName,
  userNameServer,
  date,
  dateServer,
} = styles;

const Message: React.FC<MessageProps> = ({
  message: { username, message, createdAt },
}) => {
  const messageDate = getDate(createdAt);

  return (
    <>
      <div className={wrapper}>
        <div className={iconWrapper}>
          <IconContext.Provider value={{ className: icon }}>
            <FaUser />
          </IconContext.Provider>
        </div>
        <div className={contentWrapper}>
          <div className={messageHeader}>
            <h1 className={username === 'Server' ? userNameServer : userName}>
              {username}
            </h1>
            <p className={username === 'Server' ? dateServer : date}>
              {messageDate}
            </p>
          </div>
          <div
            className={username === 'Server' ? messageTextServer : messageText}
          >
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
