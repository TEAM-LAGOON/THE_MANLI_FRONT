import { TourListFormPropsType } from '../../Modules/TourListForm/TourListForm.types';
import { ImgListType } from '../../Atoms/MulitPhotoUpload/MulitPhotoUpload.types';
export interface CourseFormPropsType {
  title: string;
  region: string;
  expectedDate: number;
  description: string;
  tag: string;
  TourListFormList?: TourListFormPropsType[];
  singleImage: ImgListType | null | undefined;
  setSingleImage: Function;
  selectRegionList?: string[];
  onClickPlusTour?: () => void;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreaValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeSelectRegion: Function;
  onSubmitCourse: () => void;
}
