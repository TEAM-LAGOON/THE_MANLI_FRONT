import React, { SetStateAction, Dispatch } from 'react';

export interface ImgListType {
  id: number;
  imgSrc: string;
  fileName: string;
  createdAt: number;
}

export interface MulitPhotoUploadPropsType {
  imgList: ImgListType[] | undefined | null;
  onImgPlus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImg: (id: number) => void;
}
