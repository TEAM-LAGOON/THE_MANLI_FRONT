export interface ChallengeCardPropsType {
  id: number;
  thumbnail: string;
  title: string;
  count: number;
  current: number;
  onMoveDetail?: () => void;
  onCancleChallenge?: () => void;
}
