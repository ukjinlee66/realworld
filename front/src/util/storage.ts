export const getStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};

export const setStorageItem = ({ key, value }: { key: string; value: string }) => {
  return window.localStorage.setItem(key, value);
};
