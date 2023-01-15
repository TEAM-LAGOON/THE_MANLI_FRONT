import { useState } from 'react';

type useMultiInputType = (
  initialValue: object,
) => [object, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useMultiInput: useMultiInputType = initialValue => {
  const [inputValue, setInputValue] = useState<any>(initialValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setInputValue({
      ...inputValue,
      [name]: value,
    });

    console.log(inputValue);
  };

  return [inputValue, handleChangeInput];
};

export default useMultiInput;
