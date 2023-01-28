export interface LoginFormPropsType {
  inputValue: logionFormInputValue;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface logionFormInputValue {
  email: string;
  password: string;
}
