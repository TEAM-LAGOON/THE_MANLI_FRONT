import { useState } from 'react';

interface useMultiInputType {
  <T extends object>(initialValue: T): [
    T,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
  ];
}

const useMultiInput: useMultiInputType = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return [inputValue, handleChangeInput];
};

export default useMultiInput;
