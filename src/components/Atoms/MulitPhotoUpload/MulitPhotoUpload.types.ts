export interface ImgListType {
  id: number;
  imgSrc: string;
  fileName: string;
  createdAt: number;
}

export interface MulitPhotoUploadPropsType {
  imgList: ImgListType[];
  onImgPlus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImg: (id: number) => void;
}
