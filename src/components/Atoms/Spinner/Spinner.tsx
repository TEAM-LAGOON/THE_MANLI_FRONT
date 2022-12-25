import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SpinnerPropsType } from './Spinner.types';

const Spinner: React.FC<SpinnerPropsType> = ({ ...props }) => {
  return <Container {...props} />;
};

export default Spinner;

const Container = styled.div<SpinnerPropsType>`
  width: ${({ size }) => size || '3.75rem'};
  height: ${({ size }) => size || '3.75rem'};
  border-radius: 50%;
  border: 0.25rem solid ${({ color }) => color || '#21887d'};
  border-top-color: transparent;
  animation: spin ${({ speed }) => speed || '1'}s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
