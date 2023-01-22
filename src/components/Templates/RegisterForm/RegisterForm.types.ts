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
  pass: boolean;
}
export interface InputEmailType {
  email: string;
  emailPass: boolean;
  nickName: string;
  nickNamePass: boolean;
}
export interface InputPasswordType {
  password: string;
  passwordPass: boolean;
  passwordCheck: string;
  passwordCheckPass: boolean;
}
