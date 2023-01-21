import { profile } from 'console';
import type { NextPage } from 'next';
import { useState } from 'react';
import {
  Container,
  Chip,
  Avatar,
  Icon,
  Text,
  CourseStepper,
  TextArea,
  FavoriteCard,
  Profile,
  SearchInput,
  Navbar,
  ChallengeCard,
  MyListCard,
  CourseForm,
  ProfileForm,
} from '../components';

import useMulitiImage from '../hooks/useMulitiImage';

const props = {
  children: '만리',
};

const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const [imgList, onImgPlus, onDeleteImg] = useMulitiImage();

  const USER = {
    profileImg: '/images/avatar.png',
    nickname: '코난모카맘',
    level: 2,
  };
  console.log(value);
  return (
    <>
      <Navbar
        isOpen={true}
        onOpenHandler={() => console.log('')}
        logout={() => console.log('')}
        user={undefined}
      />
      <Container>
        <div>dd</div>
      </Container>
    </>
  );
};

export default Home;
