import type { NextPage } from 'next';
import { Container, Chip, Avatar, Icon, Text } from '../components';

const props = {
  children: '만리',
};
const Home: NextPage = () => {
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
    </Container>
  );
};

export default Home;
