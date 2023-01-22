export interface RegisterFormPropsType {
  registerFormState: RegisterFormStateType;
  setRegisterFormState: Function;
}

export interface RegisterFormStateType {
  agreeToTerms: AgreeToTermsType;
  inputEmail: InputEmailType;
  inputPassword: InputPasswordType;
}

export interface AgreeToTermsType {
  0: boolean;
  1: boolean;
  2: boolean;
}
export interface InputEmailType {
  email: string;
  nickName: string;
}
export interface InputPasswordType {
  password: string;
  passwordCheck: string;
}
