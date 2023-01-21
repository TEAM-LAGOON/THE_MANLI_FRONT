interface ImgListType {
  id: number;
  fileName: string;
  imgSrc: string;
  createdAt: number;
}

export interface TourListFormPropsType {
  destId: number;
  destOrder: number;
  imgList: ImgListType[];
  destName: string;
  address: string;
  detailedAddress: string;
  destDescription: string;
  onImgPlus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImg: (id: number) => void;
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreaValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickPlusBtn?: () => void;
}
