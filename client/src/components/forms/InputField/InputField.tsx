import styles from './inputfield.module.scss';
import { InputFieldProps } from './types';

const { title, input, required, errorMsg } = styles;

const InputField: React.FC<InputFieldProps> = ({
  fieldName,
  label,
  isRequired,
  type,
  value,
  handleInput,
  errorMessage,
}) => {
  return (
    <>
      <label className={title} htmlFor={fieldName}>
        {label} {isRequired && <span className={required}>*</span>}
      </label>
      <input
        className={input}
        id={fieldName}
        name={fieldName}
        type={type}
        value={value}
        onChange={handleInput}
      />
      <span className={errorMsg}>{errorMessage}</span>
    </>
  );
};

export default InputField;
