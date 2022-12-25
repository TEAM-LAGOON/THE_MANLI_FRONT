import styled from '@emotion/styled';
import { InputPropsType } from './Input.types';

const Input: React.FC<InputPropsType> = ({ ...props }) => {
  const { inputValue, placeholderText, onAction } = props;

  return (
    <Container
      type="text"
      {...props}
      placeholder={placeholderText}
      onChange={onAction}
      value={inputValue}
    />
  );
};

export default Input;

const Container = styled.input<InputPropsType>`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '0.875rem 2rem')};
  background: ${({ bg }) => (bg ? bg : '#fff')};
  color: ${({ color }) => (color ? color : '#767676')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  border: ${({ border }) => (border ? border : '1px solid #767676')};
  border-radius: ${({ radius }) => (radius ? radius : '12.375rem')};
  text-overflow: ellipsis;
`;
