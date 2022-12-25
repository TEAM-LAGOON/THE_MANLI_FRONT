export interface ChallengeCardPropsType {
  bgImg: string;
  title: string;
  count: number;
  current: number;
  onMoveDetail?: () => void;
  onCancleChallenge?: () => void;
}
