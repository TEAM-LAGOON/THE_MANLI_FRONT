import { FavoriteCardPropsType } from './FavoriteCard.types';
import styled from '@emotion/styled';
import { Avatar, Button, Icon, Text } from '../../Atoms';

const FavoriteCard: React.FC<FavoriteCardPropsType> = ({ ...props }) => {
  return (
    <FavoriteCardContainer thumbnail={props.thumbnail}>
      <div className="cancle-btn">
        <Icon name="close" className="cursor-pointer" onClick={() => props.onCancle} />
      </div>
      <div className="inner cursor-pointer" onClick={() => props.onMoveDetail}>
        <div className="course-contents">
          <Text
            value={props.title}
            type="semibold-l title"
            color="var(--white)"
            align="left"
          />
          <Text
            value={props.description}
            color="var(--white)"
            align="left"
            type="regular-s"
          />
          <div className="share-user">
            <Avatar imgSrc={props.profileImg} width="3rem" height="3rem" />
            <Text
              value={props.nickname}
              type="regular-small nickname"
              color="var(--white)"
            />
          </div>
        </div>
        <div className="start-btn">
          <Button bg="var(--secondary-500)" onAction={() => props.onStartRoot}>
            <span className="text">시작</span>
            <Icon name="navigate" />
          </Button>
        </div>
      </div>
    </FavoriteCardContainer>
  );
};

const FavoriteCardContainer = styled.div<{ thumbnail: string }>`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
    url(${props => props.thumbnail}), var(--white);
  border-radius: 2rem;

  & .cancle-btn {
    width: 3rem;
    height: 3rem;
    margin-left: auto;

    path {
      stroke: var(--white);
    }
  }

  & .start-btn {
    width: 10.375rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      & .text {
        font-family: 'ONE-Mobile-Title';
        font-weight: 400;
        margin-right: 1rem;
        font-size: 1.75rem;
        line-height: 1.2;
        color: var(--black);
        white-space: nowrap;
      }
    }
  }

  & .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .course-contents {
      padding: 1.3125rem 0;
      width: 26.625rem;

      div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & .title {
        margin-bottom: 0.5rem;
      }
      & .share-user {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        & .nickname {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
export default FavoriteCard;
