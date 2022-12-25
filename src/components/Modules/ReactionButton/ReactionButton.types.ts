export interface ReactionButtonPropsType {
  reaction: ReactionState;
  setReaction: Function;
}

export interface ReactionState {
  value: ReactionValue;
  checked: ReactionChecked;
}

interface ReactionValue {
  like: number;
  unlike: number;
  favorite: number;
}
interface ReactionChecked {
  like: boolean;
  unlike: boolean;
  favorite: boolean;
}
