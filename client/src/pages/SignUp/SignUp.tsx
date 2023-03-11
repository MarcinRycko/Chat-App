import styles from './signup.module.scss';
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm';

const { wrapper } = styles;

const SignUp: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
