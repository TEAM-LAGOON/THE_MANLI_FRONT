import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Button, Card, Container } from '../components';
import Input from '../components/Atoms/Input';
import { useInput } from '../hooks';

const Home: NextPage = () => {
  const [inputValue, handleChangeInput] = useInput('');

  const inputProps = {
    placeholderText: 'test',
    onAction: handleChangeInput,
    inputValue: inputValue,
  };

  return (
    <Container>
      <Button>버튼 테스트</Button>
      <Card>카드 테스트</Card>
      <Input {...inputProps} />
      <p>inputValue : {inputValue}</p>
    </Container>
  );
};

export default Home;
