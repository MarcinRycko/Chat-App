import styles from './login.module.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

const { wrapper } = styles;

const Login: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
