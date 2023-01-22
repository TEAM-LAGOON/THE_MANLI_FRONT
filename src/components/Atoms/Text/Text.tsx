import { TextPropsType } from './Text.types';
import styled from '@emotion/styled';

const Text: React.FC<TextPropsType> = ({ value, style, ...props }) => {
  return (
    <TextContainer className={props.type} style={style} {...props}>
      {value}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.div<TextPropsType>`
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color }) => color || 'var(--text-500)'};
  font-family: 'Pretendard';
  font-style: normal;
  white-space: pre-wrap;

  //body design -------------->

  //Semibold/small
  &.semibold-s {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.5;
  }
  //Semibold/medium
  &.semibold-m {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.5;
  }
  //Semibold/large
  &.semibold-l {
    font-weight: 600;
    font-size: 2.625rem;
    line-height: 1.4;
  }
  //regular/small
  &.regular-s {
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 1.5;
  }
  //regular/medium
  &.regular-m {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5;
  }
  //regular/large
  &.regular-l {
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 1.4;
  }

  //mobile headline -------------->
  //bold/5
  &.m-bold-5 {
    font-weight: 700;
    font-size: 2.66625rem;
    line-height: 1.5;
  }
  //bold/4
  &.m-bold-4 {
    font-weight: 700;
    font-size: 3.55375rem;
    line-height: 1.5;
  }
  //bold/3
  &.m-bold-3 {
    font-weight: 700;
    font-size: 4.7375rem;
    line-height: 1.4;
  }
  //bold/2
  &.m-bold-2 {
    font-weight: 700;
    font-size: 6.315rem;
    line-height: 1.3;
  }
  //semibold/5
  &.m-semibold-5 {
    font-weight: 600;
    font-size: 2.66625rem;
    line-height: 1.5;
  }
  //semibold/4
  &.m-semibold-4 {
    font-weight: 600;
    font-size: 3.55375rem;
    line-height: 1.5;
  }
  //semibold/3
  &.m-semibold-3 {
    font-weight: 600;
    font-size: 4.7375rem;
    line-height: 1.4;
  }
  //semibold/2
  &.m-semibold-2 {
    font-weight: 600;
    font-size: 6.315rem;
    line-height: 1.3;
  }

  //desktop headline -------------->
  &.d-bold-5 {
    font-weight: 700;
    font-size: 3.554612rem;
    line-height: 1.5;
  }
  &.d-bold-4 {
    font-weight: 700;
    font-size: 6.3150875rem;
    line-height: 1.5;
  }
  &.d-bold-3 {
    font-weight: 700;
    font-size: 8.4180125rem;
    line-height: 1.2;
  }
  &.d-bold-2 {
    font-weight: 700;
    font-size: 11.2212125rem;
    line-height: 1.1;
  }
  &.d-semibold-5 {
    font-weight: 600;
    font-size: 4.7371875rem;
    line-height: 1.5;
  }
  &.d-semibold-4 {
    font-weight: 600;
    font-size: 6.3150875rem;
    line-height: 1.5;
  }
  &.d-semibold-3 {
    font-weight: 600;
    font-size: 8.4180125rem;
    line-height: 1.2;
  }
  &.d-semibold-2 {
    font-weight: 600;
    font-size: 11.2212125rem;
    line-height: 1.1;
  }
`;
