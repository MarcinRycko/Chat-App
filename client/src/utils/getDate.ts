export const getDate = (createdAt: number) => {
  const newDate: Date = new Date(createdAt);

  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const month =
    newDate.getMonth() < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hour =
    newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minute =
    newDate.getMinutes() < 10
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();

  return `${day}.${month}.${year} ${hour}:${minute}`;
};
