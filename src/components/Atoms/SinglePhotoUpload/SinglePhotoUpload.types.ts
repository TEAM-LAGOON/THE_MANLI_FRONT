interface SinglePhotoType {
  singleImage: ImgListType | null | undefined;
  setSingleImage: Function;
}

export interface SinglePhotoUploadPropsType extends SinglePhotoType {
  className: string;
  children: React.ReactNode;
}

export interface ImgListType {
  filePath: string;
  originalFileName: string;
}

export interface ThumbnailUploadPropsType extends SinglePhotoType {}

export interface ProfileUploadPropsType extends SinglePhotoType {}
