export interface InputPropsType {
  inputValue: string | number;
  type?: string;
  inputName?: string;
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
