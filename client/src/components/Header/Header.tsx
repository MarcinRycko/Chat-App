import { useUserNameContext } from '../../context/hooks';
import UsernameInput from './../UsernameInput/UsernameInput';
import { FaUsers } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { HeaderProps } from './types';
import styles from './header.module.scss';

const { wrapper, title, icon } = styles;

const Header: React.FC<HeaderProps> = ({ handleMemberListDisplay }) => {
  const { handleUsername, username } = useUserNameContext();

  return (
    <>
      <div className={wrapper}>
        <h1 className={title}>#ChatApp</h1>
        <UsernameInput username={username} handleUsername={handleUsername} />
        <IconContext.Provider value={{ className: icon }}>
          <FaUsers onClick={handleMemberListDisplay} />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Header;
