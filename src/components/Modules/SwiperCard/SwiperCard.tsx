import styled from '@emotion/styled';
import Image from 'next/image';
import { Icon, Swiper } from '../../Atoms';
import { SwiperCardPropsType } from './SwiperCard.types';

const SwiperCard: React.FC<SwiperCardPropsType> = ({ ...props }) => {
  const { userName, userImage, tourName, tourDescription, tourImgList, checkedFavorite } =
    props;

  return (
    <Container>
      <div>
        <Swiper imageList={tourImgList} />
      </div>
      <UserContainer>
        <div className="userInfo">
          <div className="imgs">
            <Image
              src={'/images/avatar.png'}
              alt="업로드 이미지"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span>{userName}</span>
        </div>
        <Icon name={'heart_outline'} className="heart_outline" />
      </UserContainer>
      <TourContainer>
        <h4>{tourName}</h4>
        <p className="text-ellipsis-two-line ">{tourDescription}</p>
      </TourContainer>
    </Container>
  );
};

export default SwiperCard;

const Container = styled.div`
  width: 41rem;
  height: 40rem;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.25rem;
  font-size: 1.75rem;

  & .userInfo {
    display: flex;
    line-height: 180%;
    & .imgs {
      position: relative;
      width: 3rem;
      height: 3rem;
      margin-right: 0.5rem;
    }
  }
  & .heart_outline {
    display: flex;
    stroke: var(--text-500);
  }
`;

const TourContainer = styled.div`
  margin-top: 2.25rem;
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 2rem;
    color: var(--text-500);
  }
  p {
    font-size: 1.75rem;
    color: var(--text-400);
  }
`;
