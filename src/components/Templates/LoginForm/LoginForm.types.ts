export interface LoginFormPropsType {
  inputValue: logionFormInputValue;
  handleChangeInput: () => void;
}

interface logionFormInputValue {
  email: string;
  password: string;
}
