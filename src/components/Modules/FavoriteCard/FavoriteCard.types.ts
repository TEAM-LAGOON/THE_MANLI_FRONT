export interface FavoriteCardPropsType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  profileImg?: string;
  nickname?: string;
  onMoveDetail?: () => void;
  onCancle: () => void;
  onStartRoot?: () => void;
}
