export let localStorageSet = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export let localStorageGet = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key));
};

