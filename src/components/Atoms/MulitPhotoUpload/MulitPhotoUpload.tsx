import styled from '@emotion/styled';
import Image from 'next/image';
import Icon from '../Icon';
import { MulitPhotoUploadPropsType } from './MulitPhotoUpload.types';
import { ImgListType } from './MulitPhotoUpload.types';

const MulitPhotoUpload: React.FC<MulitPhotoUploadPropsType> = ({ ...props }) => {
  return (
    <ImgContainer>
      <div className="img-container">
        <div className="img-contents">
          <div className="img-plus">
            <label htmlFor="img-input">
              <Icon name={'plus'} className="plus"></Icon>
            </label>
            <input
              id="img-input"
              accept="image/*"
              type="file"
              alt="이미지 인풋"
              onChange={props.onImgPlus}
            ></input>
          </div>

          {props.imgList?.map((item: ImgListType, idx: number) => (
            <div className="upload-img-content" key={item.id}>
              <Image
                src={item.imgSrc}
                alt="업로드 이미지"
                key={idx}
                layout="fill"
                objectFit="cover"
                className="upload-img"
              />
              <Icon
                name={'close'}
                className="delete-btn"
                onClick={() => props.onDeleteImg(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  & .img-container {
    & .img-contents {
      display: flex;
      flex-wrap: wrap;
      margin-right: -1rem;

      & .img-plus {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        margin-bottom: 2rem;
        width: 12.75rem;
        height: 12.75rem;
        border: 0.125rem solid var(--surface-500);
        border-radius: 2rem;
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      input {
        display: none;
      }
    }
  }

  & .upload-img-content {
    position: relative;
    margin-right: 1rem;
    margin-bottom: 2rem;
    width: 13rem;
    height: 13rem;

    & .upload-img {
      border-radius: 2rem;
    }
    & .delete-btn {
      position: absolute;
      top: 1.84rem;
      right: 1.84rem;
      cursor: pointer;
    }
    path {
      stroke: var(--white);
    }
  }
`;
export default MulitPhotoUpload;
