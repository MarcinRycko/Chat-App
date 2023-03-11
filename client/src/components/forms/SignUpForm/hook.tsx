import { useState } from 'react';
import {
  emailValidation,
  usernameValidation,
  passwordValidation,
  checkboxValidation,
} from '../../../utils/validation';
import { TState } from './types';

const initialState: TState = {
  email: { value: '', errorMessage: '' },
  username: { value: '', errorMessage: '' },
  password: { value: '', errorMessage: '' },
  checkbox: { checked: false, errorMessage: '' },
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

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      checkbox: { ...prev.checkbox, checked: !prev.checkbox.checked },
    }));
  };

  const handleSetErrorMessages = (
    emailError: string,
    usernameError: string,
    passwordError: string,
    checkboxError: string
  ) => {
    setState((prev) => ({
      ...prev,
      email: { ...prev.email, errorMessage: emailError },
      username: { ...prev.username, errorMessage: usernameError },
      password: { ...prev.password, errorMessage: passwordError },
      checkbox: { ...prev.checkbox, errorMessage: checkboxError },
    }));
  };

  const handleValidation = () => {
    const emailError: string = emailValidation(state.email.value);
    const passwordError: string = passwordValidation(state.password.value);
    const usernameError: string = usernameValidation(state.username.value);
    const checkboxError: string = checkboxValidation(state.checkbox.checked);

    handleSetErrorMessages(
      emailError,
      usernameError,
      passwordError,
      checkboxError
    );

    return Boolean(
      !emailError && !passwordError && !usernameError && !checkboxError
    );
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

  return { state, handleInput, handleCheckbox, handleSubmit };
};
