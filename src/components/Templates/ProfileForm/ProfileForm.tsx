import styled from '@emotion/styled';
import { Button, Input, ProfileUpload, Text, TextArea } from '../../Atoms';
import { ProfileFormPropsType } from './ProfileForm.types';
const ProfileForm: React.FC<ProfileFormPropsType> = ({ ...props }) => {
  return (
    <ProfileFormContainer>
      <div className="profile-upload-contents">
        <ProfileUpload
          singleImage={undefined}
          setSingleImage={() => console.log('single')}
        />
      </div>
      <div className="input-contents">
        <Text
          value="닉네임 "
          type="regular-s sub-title"
          color="var(--text-300)"
          align="left"
        />
        <Input
          inputValue={props.nickname}
          inputName="nickname"
          border="0.125rem solid var(--surface-200)"
          fontSize={'2rem'}
          placeholderText="닉네임을 입력해주세요"
          onAction={e => props.onChangeInputValue}
        />
      </div>
      <div className="input-contents">
        <Text
          value="설명"
          type="regular-s sub-title"
          color="var(--text-300)"
          align="left"
        />
        <TextArea border="0.125rem solid var(--surface-200)" />
      </div>
      <Button bg="var(--primary-500)" fontSize="2rem" onAction={props.onSaveProfile}>
        프로필 저장
      </Button>
    </ProfileFormContainer>
  );
};

export default ProfileForm;

const ProfileFormContainer = styled.div`
  & .profile-upload-contents {
    margin: 6rem 0 2rem;
  }

  & .input-contents {
    margin-bottom: 2rem;

    & .sub-title {
      margin-bottom: 1rem;
    }
  }
`;
