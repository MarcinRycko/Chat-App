import { useMessageInputContext } from '../../context/hooks';
import { IconContext } from 'react-icons';
import { IoMdSend } from 'react-icons/io';
import styles from './messageinput.module.scss';

const { wrapper, input, icon, iconWrapper } = styles;

const MessageInput: React.FC = () => {
  const { handleSendMessage, messageInputValue, handleMessageInput } =
    useMessageInputContext();

  return (
    <>
      <form className={wrapper} onSubmit={handleSendMessage}>
        <input
          className={input}
          value={messageInputValue}
          onChange={handleMessageInput}
        ></input>
        <button className={iconWrapper}>
          <IconContext.Provider value={{ className: icon }}>
            <IoMdSend />
          </IconContext.Provider>
        </button>
      </form>
    </>
  );
};

export default MessageInput;
