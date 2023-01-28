import { Dispatch, SetStateAction } from 'react';

export interface LoginFormPropsType {
  inputValue: logionFormInputValue;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  localStorageValue: string;
  setLocalStorageValue: any;
  delStorage: Function;
}

interface logionFormInputValue {
  email: string;
  password: string;
}
