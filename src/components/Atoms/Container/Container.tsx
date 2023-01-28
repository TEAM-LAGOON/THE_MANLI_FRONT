import { ContainerPropsType } from './Container.types';
import styled from '@emotion/styled';

//todo: header 및 필요한 추가 속성
const Container: React.FC<ContainerPropsType> = ({ className = '', children }) => {
  return <Root className={className}>{children}</Root>;
};
export default Container;

const Root = styled.div`
  ${props => props.theme.mq.mobile} {
    margin: 0 2rem;
  }

  ${props => props.theme.mq.tablet} {
    margin: 0 4rem;
  }

  ${props => props.theme.mq.laptop} {
    margin: 0 auto;
  }
`;
