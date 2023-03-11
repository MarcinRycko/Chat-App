import { useState } from 'react';
import { passwordValidation, emailValidation } from '../../../utils/validation';
import { TState } from './types';

const initialState: TState = {
  email: { value: '', errorMessage: '' },
  password: { value: '', errorMessage: '' },
};

export const useForm = () => {
  const [state, setState] = useState(initialState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name as keyof TState],
        value: e.target.value,
      },
    }));
  };

  const handleSetErrorMessages = (
    emailError: string,
    passwordError: string
  ) => {
    setState((prev) => ({
      ...prev,
      email: { ...prev.email, errorMessage: emailError },
      password: { ...prev.password, errorMessage: passwordError },
    }));
  };

  const handleValidation = () => {
    const emailError: string = emailValidation(state.email.value);
    const passwordError: string = passwordValidation(state.password.value);

    handleSetErrorMessages(emailError, passwordError);

    return Boolean(!emailError && !passwordError);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const isValidated = handleValidation();
    if (isValidated) {
      console.log('fetch data...');
    } else {
      console.log('Validation error...');
    }
  };

  return { state, handleInput, handleSubmit };
};
