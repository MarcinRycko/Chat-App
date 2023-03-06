import { getLocalStorageItem, setLocalStoregeItem } from './localStorageUtils';

export const getUsername = () => {
  const user: string | null = getLocalStorageItem('username');
  if (user) {
    return user;
  }
  const newUser: string = `User${Math.floor(Math.random() * 999)}`;
  setLocalStoregeItem('username', newUser);
  return newUser;
};
