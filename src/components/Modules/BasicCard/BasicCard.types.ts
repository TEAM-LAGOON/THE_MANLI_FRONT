export interface BasicCardPropsType {
  tourData: basicCardTourData;
  setTourData: Function;
}

interface basicCardTourData {
  name: string;
  address: string;
  description: string;
  imgSrc: string;
}
