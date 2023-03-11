import styles from './loginform.module.scss';
import InputField from '../InputField/InputField';
import { useForm } from './hook';
import { Link } from 'react-router-dom';

const { wrapper, title, formWrapper, button, helperText, link, textWrapper } =
  styles;

const LoginForm: React.FC = () => {
  const { state, handleInput, handleSubmit } = useForm();

  return (
    <>
      <div className={wrapper}>
        <h1 className={title}>Welcome back</h1>
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
            fieldName="password"
            label="Password"
            isRequired
            type="password"
            value={state.password.value}
            handleInput={handleInput}
            errorMessage={state.password.errorMessage}
          />
          <span className={link}>Forgot your password?</span>
          <button className={button} type="submit">
            Login in
          </button>
          <span className={textWrapper}>
            <p className={helperText}>Need an account?</p>
            <Link className={link} to="/signup">
              Sign up now!
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
