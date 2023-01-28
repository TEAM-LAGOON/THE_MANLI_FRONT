import React from 'react';
import { IconType } from '../Icon/Icon.types';

export interface InputPropsType {
  iconName?: IconType;
  className?: string;
  inputValue: string;
  inputName?: string;
  inputType?: string;
  placeholderText: string;
  onAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  padding?: string;
  bg?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  radius?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface InputContainerPropsType {
  bg?: string;
}
