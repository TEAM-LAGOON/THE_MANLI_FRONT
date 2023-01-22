import { Dispatch, SetStateAction } from 'react';

export interface FormLayoutPropsType {
  children: React.ReactNode;
  formLayoutState: formLayoutStateType;
  setFormLayoutState: Function;
  nextPageCheck: (value: number) => NextPageCheckReturn;
  errMsg: ErrMsg;
  setErrMsg: Dispatch<
    SetStateAction<{
      email: string;
      nickName: string;
      password: string;
      passwordCheck: string;
    }>
  >;
}

export interface formLayoutStateType {
  currentNum: number;
  maxNum: number;
  text: TextType[];
}

export interface TextType {
  title: string;
  description: string;
}

export interface NextPageCheckReturn {
  result: boolean;
  msg: string;
  type: string;
}

export interface ErrMsg {
  email: string;
  nickName: string;
  password: string;
  passwordCheck: string;
}
