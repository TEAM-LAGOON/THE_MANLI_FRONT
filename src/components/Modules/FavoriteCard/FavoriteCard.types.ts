export interface FavoriteCardPropsType {
  bgImg: string;
  title: string;
  description: string;
  profileImg?: string;
  nickname?: string;
  onMoveDetail?: () => void;
  onCancle: () => void;
}
