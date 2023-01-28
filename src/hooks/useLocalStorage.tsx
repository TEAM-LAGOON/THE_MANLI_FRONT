import { useState, useEffect, SetStateAction, Dispatch } from 'react';

interface useLocalStorageType {
  <T>(key: string, initialValue: T): [T, SetValue<T>, Function];
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

const useLocalStorage: useLocalStorageType = <T,>(key: string, initialValue: T) => {
  const [storageValue, setStorageValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue));
    } catch (error) {
      currentValue = initialValue;
    }

    return currentValue;
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storageValue) : value;
      setStorageValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delValue = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storageValue, setValue, delValue];
};

export default useLocalStorage;
