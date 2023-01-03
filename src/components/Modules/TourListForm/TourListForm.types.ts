interface ImgListType {
  id: number;
  imgSrc: string;
  fileName: string;
  createdAt: number;
}

export interface TourListFormPropsType {
  order: number;
  id: number;
  imgList: ImgListType[];
  title: string;
  address: string;
  detailAddress: string;
  description: string;
  onImgPlus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImg: (id: number) => void;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreaValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickPlusBtn?: () => void;
}
