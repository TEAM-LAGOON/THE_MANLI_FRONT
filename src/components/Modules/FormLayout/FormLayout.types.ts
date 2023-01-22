import { Dispatch, SetStateAction } from 'react';

export interface FormLayoutPropsType {
  children: React.ReactNode;
  formLayoutState: formLayoutStateType;
  setFormLayoutState: Function;
  nextHandler: any;
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
