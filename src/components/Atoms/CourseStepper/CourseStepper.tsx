import { CourseStepperPropsType } from './CourseStepper.types';
import styled from '@emotion/styled';
import Icon from '../Icon';

const CourseStepper: React.FC<CourseStepperPropsType> = ({ className, ...props }) => {
  return (
    <CourseStepperContainer className={className}>
      {Array.from(Array(props.count), (_, idx) => (
        <>
          <Icon
            name={idx !== props.current - 1 ? 'flag' : 'fire'}
            className={idx < props.current - 1 ? 'flag active' : 'flag'}
          />

          {idx !== props.count - 1 && (
            <div className={idx > props.current - 2 ? 'line' : 'line active'}></div>
          )}
        </>
      ))}
    </CourseStepperContainer>
  );
};

const CourseStepperContainer = styled.div`
  display: flex;
  align-items: center;

  & .line {
    margin: 0 0.5rem;
    width: 1rem;
    height: 0.125rem;
    background: var(--white);
  }
  & .line.active {
    background: var(--secondary-500);
  }
  & .flag {
    fill: var(--white);
  }
  & .flag.active {
    fill: var(--secondary-500);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export default CourseStepper;
