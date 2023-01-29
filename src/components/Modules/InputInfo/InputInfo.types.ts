import { RegisterFormPropsType } from '../../Templates/RegisterForm';

export interface InputInfoPropsType extends RegisterFormPropsType {}

export interface inputCheckState {
  email: boolean | undefined;
  nickName: boolean | undefined;
}
