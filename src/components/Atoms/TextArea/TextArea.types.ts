export interface TextAreaPropsType {
  clsssName?: string;
  id?: string;
  name?: string;
  placeHolder?: string;
  value?: string | ReadonlyArray<string>;
  maxLength?: number;
  width?: string;
  height?: string;
  onChangeEvent?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
