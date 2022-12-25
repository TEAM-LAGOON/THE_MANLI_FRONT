import { ChallengeCardPropsType } from './ChallengeCard.types';
import styled from '@emotion/styled';
import { Button, CourseStepper, Text } from '../../Atoms';

const ChallengeCard: React.FC<ChallengeCardPropsType> = ({ ...props }) => {
  return (
    <ChallengeCardContainer bgImg={props.bgImg}>
      {props.count !== props.current && (
        <div className="inner cursor-pointer" onClick={props.onMoveDetail}>
          <div className="course-contents">
            <Text
              value={props.title}
              type="semibold-m title"
              color="var(--white)"
              align="left"
            />
            <Button className="cancle-btn" onAction={props.onCancleChallenge}>
              도전 취소
            </Button>
          </div>
          <CourseStepper
            className="course-stepper"
            count={props.count}
            current={props.current}
          />
        </div>
      )}
      {props.count === props.current && (
        <div className="finish-course-contents">
          <div className="course-item">
            <Text value={props.title} type="semibold-m title" color="var(--white)" />
            {/* TODO: 폰트 추가 후 변경 */}
            <Text value="도전 완료" type="semibold-m" color="var(--white)" />
          </div>
          <CourseStepper
            className="course-stepper"
            count={props.count}
            current={props.current}
          />
        </div>
      )}
    </ChallengeCardContainer>
  );
};

const ChallengeCardContainer = styled.div<{ bgImg: string }>`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
    url(${props => props.bgImg}), var(--white);
  border-radius: 2rem;

  & .course-contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 14rem;

    div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & .cancle-btn {
      width: 11.125rem;
    }
  }

  & .finish-course-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .course-item {
      margin: 3.25rem 0;
    }
    & .title {
      margin-bottom: 0.5rem;
    }
  }
`;

export default ChallengeCard;
