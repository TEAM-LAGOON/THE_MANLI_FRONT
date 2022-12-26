import { MyListCardPropsType } from './MyListCard.types';
import styled from '@emotion/styled';
import { Button, Icon, Text } from '../../Atoms';

const MyListCard: React.FC<MyListCardPropsType> = ({ ...props }) => {
  return (
    <MyListCardContainer thumbnail={props.thumbnail}>
      <div className="inner">
        <div className="list-info cursor-pointer" onClick={() => props.onMoveDetail}>
          <Text value={props.title} type="semibold-s" color="var(--white)" />
          <Text
            value={props.description}
            type="regular-s description"
            color="var(--text-200)"
          />
          <p className="status">
            {props.status === 'PENDING'
              ? '승인 대기중'
              : props.status === 'APPROVE'
              ? '승인 완료'
              : '승인 거절'}
          </p>
        </div>
        <div className="btn-contents">
          {props.status !== 'APPROVE' && (
            <Button
              onAction={() => props.onEditRoot}
              bg="none"
              hoverBg="rgba(255, 255, 255, 0.2);"
              radius="1.5rem"
            >
              <Icon name="create" />
              <Text value="수정" type="semibold-s" color="var(--white)" />
            </Button>
          )}
          {props.status !== 'APPROVE' && (
            <Button
              onAction={() => props.onEditRoot}
              bg="none"
              hoverBg="rgba(255, 255, 255, 0.2);"
              radius="1.5rem"
            >
              <svg width="16" height="17" viewBox="0 0 16 17">
                <path d="M11.5 12L4.5 5M11.5 5L4.5 12" stroke="white" />
              </svg>
              <Text value="삭제" type="semibold-s" color="var(--white)" />
            </Button>
          )}
        </div>
      </div>
    </MyListCardContainer>
  );
};

const MyListCardContainer = styled.div<{ thumbnail: string }>`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
    url(${props => props.thumbnail}), var(--white);
  border-radius: 2rem;

  & .inner {
    & .description {
      margin: 0.5rem 0 1rem;
    }
    & .status {
      margin-bottom: 1.0625rem;
      text-align: center;
      font-family: 'ONE-Mobile-Title';
      font-style: normal;
      font-weight: 400;
      font-size: 2.66625rem;
      line-height: 1.5;
      color: var(--white);
    }

    & .btn-contents {
      display: flex;
      justify-content: end;

      button {
        display: flex;
        align-items: center;
        width: 9.125rem;
        height: 4.125rem;

        & .delete {
          stroke-width: 1;
          fill: path('M11.5 12L4.5 5M11.5 5L4.5 12');
        }
        svg {
          margin-right: 1rem;
          width: 2rem;
          height: 2rem;
        }
        path {
          stroke: var(--white);
        }
      }
    }
  }

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export default MyListCard;
