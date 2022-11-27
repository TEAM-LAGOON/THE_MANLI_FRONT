import styled from '@emotion/styled';
import { CardPropsType } from './Card.types';

const Card: React.FC<CardPropsType> = ({ children, ...props }) => {
  const { className } = props;
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  );
};

export default Card;

const Container = styled.div<CardPropsType>`
  width: 100%;
  text-align: center;
`;
