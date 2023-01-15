import { TourListFormPropsType } from '../../Modules/TourListForm/TourListForm.types';

export interface CourseFormPropsType {
  title: string;
  region: string;
  expectedDate: number;
  description: string;
  tag: string;
  TourListFormList?: TourListFormPropsType[];
  selectRegionList?: string[];
  onClickPlusTour?: () => void;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreaValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeSelectRegion: Function;
}
