import styled from '@emotion/styled';
import Icon from '../Icon';
import SinglePhotoUpload from './SinglePhotoUpload';
import { ProfileUploadPropsType } from './SinglePhotoUpload.types';

const ProfileUpload: React.FC<ProfileUploadPropsType> = ({ ...props }) => {
  const { singleImage, setSingleImage } = props;

  const ProfileUploadProps = {
    singleImage: singleImage,
    setSingleImage: setSingleImage,
    className: 'profile-upload',
  };

  return (
    <SinglePhotoUpload {...ProfileUploadProps}>
      <PhotoUpload>
        <Icon name={'camera'} className="camera" />
      </PhotoUpload>
    </SinglePhotoUpload>
  );
};

export default ProfileUpload;

const PhotoUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;
  overflow: hidden;
  background-color: var(--white);
`;
