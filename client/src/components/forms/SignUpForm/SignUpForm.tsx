import styles from './signupform.module.scss';
import InputField from '../InputField/InputField';
import { useForm } from './hook';
import { Link } from 'react-router-dom';

const {
  wrapper,
  title,
  formWrapper,
  button,
  helperText,
  link,
  textWrapper,
  checkbox,
  errorMsg,
} = styles;

const SignUpForm: React.FC = () => {
  const { state, handleInput, handleCheckbox, handleSubmit } = useForm();

  return (
    <>
      <div className={wrapper}>
        <h1 className={title}>Sign up</h1>
        <form className={formWrapper} onSubmit={handleSubmit} noValidate>
          <InputField
            fieldName="email"
            label="E-mail adress"
            isRequired
            type="email"
            value={state.email.value}
            handleInput={handleInput}
            errorMessage={state.email.errorMessage}
          />
          <InputField
            fieldName="username"
            label="User name"
            isRequired
            type="text"
            value={state.username.value}
            handleInput={handleInput}
            errorMessage={state.username.errorMessage}
          />
          <InputField
            fieldName="password"
            label="Password"
            isRequired
            type="password"
            value={state.password.value}
            handleInput={handleInput}
            errorMessage={state.password.errorMessage}
          />
          <span className={textWrapper}>
            <input
              className={checkbox}
              type="checkbox"
              checked={state.checkbox.checked}
              onChange={handleCheckbox}
            />
            <p className={helperText}>
              By signing up, you agree
              <span className={link}> Terms of Service </span> and
              <span className={link}> Privacy Policy</span>.
            </p>
          </span>
          <span className={errorMsg}>{state.checkbox.errorMessage}</span>
          <button className={button}>Sign up</button>
          <span className={textWrapper}>
            <p className={helperText}>Do you have an account?</p>
            <Link className={link} to="/login">
              Login in now!
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
