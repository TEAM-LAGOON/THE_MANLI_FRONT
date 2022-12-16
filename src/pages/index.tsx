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
} from '../components';

const props = {
  children: '만리',
};
const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  console.log(value);
  return (
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
    </Container>
  );
};

export default Home;
