interface SinglePhotoType {
  singleImage: ImgListType | null | undefined;
  setSingleImage: Function;
}

export interface SinglePhotoUploadPropsType extends SinglePhotoType {
  className: string;
  children: React.ReactNode;
}

export interface ImgListType {
  imgSrc: string;
  fileName: string;
  createdAt: number;
}

export interface ThumbnailUploadPropsType extends SinglePhotoType {}

export interface ProfileUploadPropsType extends SinglePhotoType {}
