export interface MyListCardPropsType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  onMoveDetail?: () => void;
  onEditRoot?: () => void;
  onDeleteRoot?: () => void;
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}
