import { ChipPropsType } from './Chip.types';
import styled from '@emotion/styled';

const Chip: React.FC<ChipPropsType> = ({ children, ...props }) => {
  return <ChipContainer {...props}>{children}</ChipContainer>;
};

export default Chip;

const ChipContainer = styled.div<ChipPropsType>`
  display: inline-block;
  padding: ${({ padding }) => padding || '0.5rem 1rem'};
  background-color: ${({ bgColor }) => bgColor || 'var(--primary-500)'};
  color: ${({ color }) => color || 'var(--white)'};
  border-radius: ${({ borderRadius }) => borderRadius || '12.375rem'};
`;
