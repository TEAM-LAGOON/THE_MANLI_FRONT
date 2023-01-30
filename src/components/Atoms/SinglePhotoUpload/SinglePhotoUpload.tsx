import styled from '@emotion/styled';
import Image from 'next/image';
import { SinglePhotoUploadPropsType } from './SinglePhotoUpload.types';

const SinglePhotoUpload: React.FC<SinglePhotoUploadPropsType> = ({
  children,
  ...props
}) => {
  const { singleImage, setSingleImage, className } = props;

  const addImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    if (file.size > 3000001) {
      return '3MB 이하의 파일만 등록할 수 있습니다.';
    }

    const fr = new FileReader();

    if (!e.target.files) {
      return '적절한 파일을 선택해주세요.';
    }
    fr.readAsDataURL(e.target.files[0]);
    fr.onload = () => {
      if (typeof fr.result === 'string') {
        setSingleImage({
          filePath: fr.result,
          originalFileName: file.name,
        });
      }
    };
  };

  return (
    <Container>
      <div className={className}>
        {singleImage ? (
          <div className="single-img-view-container">
            <Image
              src={singleImage.filePath}
              alt="업로드 이미지"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div className="single-img-view-container" />
        )}
        <div className="single-img-input">
          <label htmlFor="single-img-input">{children}</label>
          <input
            id="single-img-input"
            accept="image/*"
            type="file"
            alt="이미지 인풋"
            onChange={e => addImageHandler(e)}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  input {
    display: none;
  }
  color: var(--text-400);

  & .thumbnail-upload {
    width: 100%;
    box-sizing: border-box;

    & .single-img-view-container {
      position: relative;
      height: 16rem;
      border-radius: 2rem;
      border: 1px solid var(--surface-500);
      margin-bottom: 2rem;
      overflow: hidden;
    }
    & .single-img-input {
      float: right;
      width: 16.5rem;
      height: 4.625rem;
      font-size: 1.75rem;
    }
  }

  & .profile-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    & .single-img-view-container {
      position: relative;
      width: 13rem;
      height: 13rem;
      border-radius: 12.375rem;
      border: 1px solid var(--surface-500);
      overflow: hidden;
    }
    & .single-img-input {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default SinglePhotoUpload;
