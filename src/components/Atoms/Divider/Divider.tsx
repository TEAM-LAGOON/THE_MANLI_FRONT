import { DividerPropsType } from './Divider.types';
import styled from '@emotion/styled';

/**
 * row? true : 세로, false: 가로 (default : true)
 */
const Divider: React.FC<DividerPropsType> = ({ ...props }) => {
  const { text, row } = props;

  return (
    <>
      {row ? (
        <RowContainer>
          <Line /> {text ? <span>{text}</span> : null}
        </RowContainer>
      ) : (
        <Container>{text ? <span>{text}</span> : null}</Container>
      )}
    </>
  );
};

export default Divider;

Divider.defaultProps = {
  row: true,
};

const Container = styled.div`
  width: 100%;
  text-align: center;
  border-top: 0.125rem solid #e5e5e5; // Surface/surface-500
  line-height: 0.0001rem;
  margin: 1.25rem 0 2.5rem;

  span {
    background-color: #fff;
    color: #e5e5e5; // Surface/surface-500
    padding: 0 1.25rem;
    font-size: 1.75rem;
  }
`;

const RowContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    background-color: #fff;
    color: #e5e5e5; // Surface/surface-500
    padding: 1.25rem 0;
    font-size: 1.75rem;
  }
`;

const Line = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  border-left: 0.125rem solid #e5e5e5; // Surface/surface-500
  z-index: -1;
`;
