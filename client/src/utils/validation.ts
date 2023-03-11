const isNotEmpty = (value: string) => {
  if (!value.trimEnd()) {
    throw new Error('This field cannot be empty');
  }
};

const isEmailValid = (email: string) => {
  const emailRegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!emailRegExp.test(email)) {
    throw new Error('Enter a valid email address.');
  }
};

const isFilled = (value: string) => {
  if (value.length < 4) {
    throw new Error('Field must contains at least 4 characters.');
  }
};

const isPasswordValid = (password: string) => {
  const emailRegExp = new RegExp(/^[A-Za-z0-9]\w{5,}$/);
  if (!emailRegExp.test(password)) {
    throw new Error('Password must contains at least 6 characters.');
  }
};

const isCheckboxValid = (value: boolean) => {
  if (!value) {
    throw new Error('You must agree Terms of Service and Privacy Policy.');
  }
};

export const emailValidation = (email: string) => {
  try {
    isNotEmpty(email);
    isEmailValid(email);
    return '';
  } catch (error) {
    if (error instanceof Error) return error.message;
    return 'Unknown error';
  }
};

export const usernameValidation = (username: string) => {
  try {
    isNotEmpty(username);
    isFilled(username);
    return '';
  } catch (error) {
    if (error instanceof Error) return error.message;
    return 'Unknown error';
  }
};

export const passwordValidation = (password: string) => {
  try {
    isNotEmpty(password);
    isPasswordValid(password);
    return '';
  } catch (error) {
    if (error instanceof Error) return error.message;
    return 'Unknown error';
  }
};

export const checkboxValidation = (value: boolean) => {
  try {
    isCheckboxValid(value);
    return '';
  } catch (error) {
    if (error instanceof Error) return error.message;
    return 'Unknown error';
  }
};
