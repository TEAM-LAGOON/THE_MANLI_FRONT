import { AvatarPropsType } from './Avatar.types';
import styled from '@emotion/styled';
import Image from 'next/image';

const Avatar: React.FC<AvatarPropsType> = ({ profile, ...props }) => {
  return (
    <AvatarContainer {...props}>
      <Image
        src={profile || 'images/blank-profile.png'}
        alt="Avatar"
        layout="responsive"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div<{ height?: string; width?: string }>`
  position: relative;
  height: ${({ height }) => height || '8rem'};
  width: ${({ width }) => width || '8rem'};
  overflow: hidden;
  border-radius: 50%;
`;

export default Avatar;
