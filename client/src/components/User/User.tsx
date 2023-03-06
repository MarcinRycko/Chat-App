import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { UserProps } from './types';
import styles from './user.module.scss';

const { wrapper, icon, iconWrapper, name } = styles;

const User: React.FC<UserProps> = ({ username }) => {
  return (
    <>
      <div className={wrapper}>
        <div className={iconWrapper}>
          <IconContext.Provider value={{ className: icon }}>
            <FaUser />
          </IconContext.Provider>
        </div>
        <div className={name}>{username}</div>
      </div>
    </>
  );
};

export default User;
