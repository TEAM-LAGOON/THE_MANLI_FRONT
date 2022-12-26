export interface ChallengeCardPropsType {
  id: number;
  bgImg: string;
  title: string;
  count: number;
  current: number;
  onMoveDetail?: () => void;
  onCancleChallenge?: () => void;
}
