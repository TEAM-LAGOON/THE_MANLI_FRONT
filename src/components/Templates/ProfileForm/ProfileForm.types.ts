export interface ProfileFormPropsType {
  nickname: string;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveProfile?: () => void;
}
