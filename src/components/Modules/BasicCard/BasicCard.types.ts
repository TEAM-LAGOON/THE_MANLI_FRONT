export interface BasicCardPropsType {
  tourData: basicCardTourData;
  setTourData?: Function;
}

export interface basicCardTourData {
  name: string;
  address: string;
  description: string;
  imgSrc: string;
  disabled?: boolean;
}
