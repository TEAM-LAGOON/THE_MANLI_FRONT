import { StepperPropsType } from './Stepper.types';
import styled from '@emotion/styled';

const Stepper: React.FC<StepperPropsType> = ({ ...props }) => {
  const { maxNum, currentNum } = props;
  const range = [...Array(maxNum)].map((v, i: number) => i + 1);

  return (
    <Container className="stepper">
      {range.map((num: number) => (
        <>
          {currentNum === num ? (
            <CurrentWrapper key={num}>{num}</CurrentWrapper>
          ) : (
            <Dot key={num} />
          )}
        </>
      ))}
    </Container>
  );
};

export default Stepper;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  background-color: #9fe2db; // var(--primary-200)
  color: #fff;
  border-radius: 12.375rem;
  margin: 0 4rem;
`;
const CurrentWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  background-color: #2fbfb0; //var(--primary-500)
  color: #fff;
  border-radius: 12.375rem;
  margin: 0 2rem;
`;
