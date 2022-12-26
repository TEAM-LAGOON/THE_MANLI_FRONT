import { basicCardTourData } from '../BasicCard/BasicCard.types';

export interface ChallengeListPropsType {
  challengeData: ChallengeListData[];
  setChallengeData: Function;
}

export interface ChallengeListData extends basicCardTourData {
  range?: number;
  isChallenge: boolean;
  step?: string | undefined;
}
