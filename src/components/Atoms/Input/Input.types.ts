export interface InputPropsType {
  inputValue: string;
  placeholderText: string;
  onAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: string;
  bg?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  radius?: string;
}
