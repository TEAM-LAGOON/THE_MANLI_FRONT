import styled from '@emotion/styled';
import { ButtonPropsType } from './Button.types';

const Button: React.FC<ButtonPropsType> = ({ children, ...props }) => {
  const { onAction, className } = props;

  return (
    <Container className={className} {...props} onClick={onAction && onAction}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => (padding ? padding : '1.5rem')};
  background: ${({ bg }) => (bg ? bg : '#000')};
  color: ${({ color }) => (color ? color : '#fff')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ radius }) => (radius ? radius : '12.375rem')};

  cursor: pointer;

  :hover {
    background-color: ${({ hoverBg }) => (hoverBg ? hoverBg : 'none')};
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'none')};
  }
`;
