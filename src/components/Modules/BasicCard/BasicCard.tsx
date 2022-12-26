import styled from '@emotion/styled';
import Image from 'next/image';
import { Card } from '../../Atoms';
import { BasicCardPropsType } from './BasicCard.types';

const BasicCard: React.FC<BasicCardPropsType> = ({ ...props }) => {
  const { tourData, setTourData } = props;
  const { name, address, description, imgSrc } = tourData;
  return (
    <Card>
      <Container>
        <ContentsWrapper>
          <h4 className="basicCard-name">{name}</h4>
          <p className="basicCard-address">{address}</p>
          <p className="basicCard-description text-ellipsis-two-line">{description}</p>
        </ContentsWrapper>
        <ImgWrapper>
          <img src={imgSrc} alt={`${name} 투어 이미지`} />
        </ImgWrapper>
      </Container>
    </Card>
  );
};

export default BasicCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41rem;
  height: 14.125rem;
  text-align: left;
`;
const ContentsWrapper = styled.div`
  & .basicCard-name {
    font-weight: 600;
    font-size: 2rem;
    color: var(--text-500);
  }
  & .basicCard-address {
    font-size: 1.75rem;
    color: var(--text-200);
    margin: 0.5rem 0 2rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  & .basicCard-description {
    font-size: 1.75rem;
    color: var(--text-400);
  }
`;

const ImgWrapper = styled.div`
  img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 2rem;
    /* padding: 1.0625rem 0; */
  }
`;
