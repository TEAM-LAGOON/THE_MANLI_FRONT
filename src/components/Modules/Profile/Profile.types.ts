export interface ProfilePropsType {
  profileSrc?: string;
  nickname: string;
  rank?: string;
  likeCount: number;
  challengeCount: number;
  shareCount: number;
  description?: string;
  onMoveEditPage: () => void;
}
