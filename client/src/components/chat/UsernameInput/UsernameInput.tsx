import useUserNameInput from './hooks';
import styles from './usernameinput.module.scss';
import { UsernameInputProps } from './types';

const { wrapper, inputWrapper, input, button, label } = styles;

const UsernameInput: React.FC<UsernameInputProps> = ({
  handleUsername,
  username,
}) => {
  const { inputValue, handleInputChange } = useUserNameInput(username);

  return (
    <>
      <div className={wrapper}>
        <p className={label}>User name</p>
        <form
          className={inputWrapper}
          onSubmit={(e) => handleUsername(e, inputValue)}
        >
          <input
            className={input}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={button} type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default UsernameInput;
