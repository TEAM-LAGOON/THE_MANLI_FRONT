import * as svg from '../../../../public/svgs';

export type IconType = keyof typeof svg;

export interface IconPropsType {
  name: IconType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
