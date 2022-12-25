import React from 'react';
import { IconPropsType } from './Icon.types';
import * as svg from '../../../../public/svgs';

export default function Icon({ name, className, style, onClick }: IconPropsType) {
  return React.createElement(svg[name], {
    className,
    onClick,
    style,
  });
}
