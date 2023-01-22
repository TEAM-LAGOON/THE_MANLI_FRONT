export interface InputPropsType {
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
}
