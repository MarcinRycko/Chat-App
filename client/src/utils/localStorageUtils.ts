const getLocalStorageItem = (itemName: string) => {
  return localStorage.getItem(itemName);
};
const setLocalStoregeItem = (itemName: string, value: string) => {
  localStorage.setItem(itemName, value);
};

export { getLocalStorageItem, setLocalStoregeItem };
