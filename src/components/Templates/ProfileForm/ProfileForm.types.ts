export interface ProfileFormPropsType {
  nickname: string;
  introduction: string;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveProfile?: () => void;
}
