import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { SkeletonPropsType } from './Skeleton.types';

const Skeleton: React.FC<SkeletonPropsType> = ({ ...props }) => {
  return <SkeletonItem {...props} />;
};

export default Skeleton;

const SkeletonItem = styled.div<SkeletonPropsType>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  background: #f0f0f0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8rem;
    height: 100%;
    background: linear-gradient(to right, #f0f0f0, #e7e7e7, #efefef);
    animation: loading 0.3s infinite linear;
    animation: Animation 3s infinite linear;
    animation: Animation ${({ duration }) => duration || '2s'} infinite linear;
  }

  @keyframes Animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;
