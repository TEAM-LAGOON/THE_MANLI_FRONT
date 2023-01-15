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

  console.log(value);
  return (
    <>
      <Navbar />
      <Container>
        <div>dd</div>
        <Chip {...props} />
        <Avatar imgSrc="/images/avatar.png" />
        <Icon name={'fire'}></Icon>
        <Text
          type={'m-semibold-5'}
          value={`화이팅\n해보자구`}
          align={'left'}
          color={'var(--primary-400)'}
        ></Text>
        <CourseStepper count={4} current={3} />
        <TextArea value={value} onChangeEvent={e => onChangeValue(e)}></TextArea>
        <FavoriteCard
          id={1}
          thumbnail="/images/bg.jpeg"
          title="테스트"
          description="asdasdasasdasdadaasdasdasasdasdadasasdasdasasdasdadasasdasdasasdasdadass"
          profileImg="/images/avatar.png"
          nickname="코난모카맘"
          onCancle={() => console.log('test')}
        />
        <Profile
          onMoveEditPage={() => console.log('e')}
          nickname="코난모카맘"
          profileSrc="/images/avatar.png"
          rank="만리"
          likeCount={100}
          challengeCount={50}
          shareCount={100}
          description="코난이와 모카는 너무나도 말썽꾸러기 맨날 자기들 하고 싶은데로만 하구 울고 코난이와 모카는 너무나도 말썽꾸러기 맨날 자기들 하고 싶은데로만 하구 울고 코난이와 모카는 너무나도 말썽꾸러기 맨날 자기들 하고 싶은데로만 하구 울고 "
        />
        <SearchInput />
        <ChallengeCard
          id={1}
          thumbnail="/images/bg.jpeg"
          title="잠만보 병민"
          count={6}
          current={6}
        />
        <br />
        <MyListCard
          id={1}
          thumbnail="/images/bg.jpeg"
          title="나의 야옹이들"
          description="귀여운 코난이와 모카 내가 거실에 있으면 거실에서 자고 침대에 있으면 침대에서 자고 식탁에 있으면 식탁에서 자는 애기들"
          status="PENDING"
        />
      </Container>
    </>
  );
};

export default Home;
