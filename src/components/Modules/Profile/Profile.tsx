import { ProfilePropsType } from './Profile.types';
import { Avatar, Button, Chip, Text } from '../../Atoms';
import styled from '@emotion/styled';

const Profile: React.FC<ProfilePropsType> = ({ ...props }) => {
  const counts = [
    {
      title: '좋아요',
      count: props.likeCount,
    },
    { title: '도전완료', count: props.challengeCount },
    { title: '경로공유', count: props.shareCount },
  ];
  return (
    <ProfileContainer>
      <div className="user-info-contents">
        <div className="user-avatar">
          <Avatar imgSrc={props.profileSrc} width="8rem" height="8rem" />
        </div>
        <div className="user-info">
          <div className="user-nickname">
            <Text type="semibold-m" value={props.nickname} />
            {/* TODO: rank 별 color 설정 */}
            {props.rank && <Chip>{props.rank}</Chip>}
          </div>
          <div className="count-contents">
            {counts.map((count, idx: number) => (
              <div key={idx} className="count-item">
                <Text
                  value={count.title}
                  type="regular-s"
                  align="left"
                  color="var(--text-300)"
                />
                <Text type="semibold-m" value={`${count.count}`} align="left" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="description text-ellipsis-two-line">
        <Text
          value={props.description}
          type="regular-s "
          align="left"
          color="var(--text-400)"
        />
      </div>
      <Button
        bg="var(--white)"
        border="0.125rem solid var(--surface-500)"
        className="edit-btn"
        onAction={props.onMoveEditPage}
      >
        <Text
          value="프로필 수정"
          type="semibold-s "
          align="left"
          color="var(--text-400)"
        />
      </Button>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  & .user-info-contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .user-avatar {
      margin-right: 4rem;
      width: 8rem;
      height: 8rem;
    }
    & .user-info {
      width: 100%;
      & .user-nickname {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & .count-contents {
        display: flex;
        margin-top: 1.0625rem;
        justify-content: space-between;
        flex-direction: row;

        & .count-item {
          &:last-of-type {
            margin-right: 2.125rem;
          }
        }
      }
    }
  }
  & .description {
    margin: 2rem 0;
  }

  & .edit-btn {
    height: 4.625rem;
  }
`;

export default Profile;
