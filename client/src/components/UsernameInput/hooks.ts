import { useState, useEffect } from 'react';

const useUserNameInput = (username: string) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(username);
  }, [username]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return { inputValue, handleInputChange };
};

export default useUserNameInput;
