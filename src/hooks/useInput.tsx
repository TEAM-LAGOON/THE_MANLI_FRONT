import { useState } from 'react';

type UseInputType = (
  initialValue: string,
) => [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useInput: UseInputType = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return [inputValue, handleChangeInput];
};

export default useInput;
