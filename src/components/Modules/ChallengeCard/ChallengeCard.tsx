import { ChallengeCardPropsType } from './ChallengeCard.types';
import styled from '@emotion/styled';
import { Button, CourseStepper, Text } from '../../Atoms';

const ChallengeCard: React.FC<ChallengeCardPropsType> = ({ ...props }) => {
  return (
    <ChallengeCardContainer thumbnail={props.thumbnail}>
      {props.count !== props.current && (
        <div className="inner cursor-pointer" onClick={() => props.onMoveDetail}>
          <div className="course-contents">
            <Text
              value={props.title}
              type="semibold-m title"
              color="var(--white)"
              align="left"
            />
            <Button className="cancle-btn" onAction={() => props.onCancleChallenge}>
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
        <div
          className="finish-course-contents cursor-pointer"
          onClick={() => props.onMoveDetail}
        >
          <div className="course-item">
            <Text value={props.title} type="semibold-m title" color="var(--white)" />
            {/* TODO: 폰트 추가 후 변경 */}
            <p className="finish">도전 완료</p>
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

const ChallengeCardContainer = styled.div<{ thumbnail: string }>`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
    url(${props => props.thumbnail}), var(--white);
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
      font-family: 'ONE-Mobile-Title';
      font-weight: 400;
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
    & .finish {
      font-family: 'ONE-Mobile-Title';
      font-style: normal;
      font-weight: 400;
      font-size: 2.66625rem;
      line-height: 1.5;
      color: var(--white);
    }
  }
`;

export default ChallengeCard;
