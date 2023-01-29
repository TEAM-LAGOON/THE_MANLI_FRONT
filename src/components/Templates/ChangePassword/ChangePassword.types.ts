export interface ChangePasswordPropsType {
  changePasswordState: changePasswordStateType;
  setChangePasswordState: Function;
}

export interface inputCheckState {
  email: boolean | undefined;
  certification: boolean | undefined;
}

export interface changePasswordStateType {
  inputEmail: { email: string; emailPass: boolean };
  inputCertification: { certification: string; certificationPass: boolean };
  inputPassword: {
    password: string;
    passwordPass: boolean;
    passwordCheck: string;
    passwordCheckPass: boolean;
  };
}
