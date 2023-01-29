import { changePasswordStateType } from '../../Templates/ChangePassword/ChangePassword.types';
import { RegisterFormStateType } from '../../Templates/RegisterForm/RegisterForm.types';

export interface InputPasswordPropsType {
  registerFormState: RegisterFormStateType | changePasswordStateType;
  setRegisterFormState: Function;
}

export interface inputCheckState {
  passwordLength: boolean | undefined;
  passwordRegex: boolean | undefined;
  passwordCheck: boolean | undefined;
}
