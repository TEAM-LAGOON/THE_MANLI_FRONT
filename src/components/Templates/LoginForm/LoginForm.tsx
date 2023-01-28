import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, CheckBox, Container, Input, Text } from '../../Atoms';
import { LoginFormPropsType } from './LoginForm.types';

const LoginForm: React.FC<LoginFormPropsType> = ({ ...props }) => {
  const { inputValue, handleChangeInput } = props;

  return (
    <Container>
      <LogoWrapper>
        {/* TODO: 로고 이미지 변경 */}
        <div style={{ width: '8rem', height: ' 8rem', backgroundColor: '#d3d3d3' }}>
          Logo
        </div>
      </LogoWrapper>
      <InputWrapper>
        <div className="email-input">
          <Text type={'regular-s'} align={'left'} value={'이메일'} />
          <Input
            inputName={'email'}
            inputValue={inputValue.email}
            placeholderText={'이메일을 입력해주세요'}
            onAction={handleChangeInput}
          />
        </div>
        <div className="password-input">
          <Text type={'regular-s'} align={'left'} value={'비밀번호'} />
          <Input
            inputName={'password'}
            inputType={'password'}
            inputValue={inputValue.password}
            placeholderText={'비밀번호를 입력해주세요'}
            onAction={handleChangeInput}
          />
        </div>
      </InputWrapper>
      <EtcWrapper>
        {/* TODO: 링크 변경 */}
        <Link href={''}>
          <a>
            <Button color="var(--secondary-400)" bg="none">
              비밀번호 찾기
            </Button>
          </a>
        </Link>
        <Wrapper>
          <Text type={'regular-s'} align={'right'} value={'이메일 저장'} />
          <CheckBox
            className={'email-save'}
            id={''}
            isChecked={false}
            onChangeCheckBox={() => {}}
          />
        </Wrapper>
      </EtcWrapper>
      <LoginWrapper>
        {/* TODO: 로그인 클릭 이벤트 */}
        <Button onAction={() => {}}>시작</Button>
      </LoginWrapper>
    </Container>
  );
};

export default LoginForm;

const LogoWrapper = styled.div`
  div {
    margin: 14.5rem auto 6rem auto;
  }
`;

const InputWrapper = styled.div`
  width: 100%;

  input {
    margin-top: 1rem;
  }

  & .password-input {
    margin-top: 3rem;
  }
`;

const EtcWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: fit-content;
    padding: 0;
    margin-top: 3rem;
  }
  div {
  }
`;

const LoginWrapper = styled.div`
  width: 13.125rem;
  margin: 0 auto;
  margin-top: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  & .email-save {
    margin-left: 1rem;
  }
`;
