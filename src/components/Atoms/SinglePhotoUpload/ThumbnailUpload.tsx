import styled from '@emotion/styled';
import Icon from '../Icon';
import SinglePhotoUpload from './SinglePhotoUpload';
import { ThumbnailUploadPropsType } from './SinglePhotoUpload.types';

const ThumbnailUpload: React.FC<ThumbnailUploadPropsType> = ({ ...props }) => {
  const { singleImage, setSingleImage } = props;

  const thumbnailUploadProps = {
    singleImage: singleImage,
    setSingleImage: setSingleImage,
    className: 'thumbnail-upload',
  };

  return (
    <SinglePhotoUpload {...thumbnailUploadProps}>
      <ThumbnailButton>
        <Icon name={'plus'} className="plus" />
        <span>썸네일 변경</span>
      </ThumbnailButton>
    </SinglePhotoUpload>
  );
};

export default ThumbnailUpload;

const ThumbnailButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.75rem 1.75rem;
  border-radius: 12.375rem;
  border: 1px solid var(--text-400);

  span {
    text-align: center;
    margin-left: 2rem;
  }
`;
