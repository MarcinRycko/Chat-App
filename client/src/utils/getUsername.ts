export const getUsername = () => {
  const user: string | null = localStorage.getItem('username');
  if (user) {
    return user;
  }
  const newUser: string = `User${Math.floor(Math.random() * 999)}`;
  localStorage.setItem('username', newUser);
  return newUser;
};
