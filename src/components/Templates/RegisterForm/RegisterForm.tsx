import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { useState } from 'react';
import useMultiInput from '../../../hooks/useMultiInput';
import { CheckBox, Container, Input, Text } from '../../Atoms';
import { AgreeToTerms, FormLayout, InputPassword } from '../../Modules';
import InputInfo from '../../Modules/InputInfo';
import { RegisterFormPropsType } from './RegisterForm.types';

const RegisterForm: React.FC<RegisterFormPropsType> = ({ ...props }) => {
  const router = useRouter();
  const { registerFormState, setRegisterFormState } = props;

  const [formLayoutState, setFormLayoutState] = useState({
    maxNum: 3,
    currentNum: 1,
    text: [
      { title: '회원가입', description: '약관을 동의해 주세요.' },
      { title: '회원가입', description: '사용할 정보를 입력해주세요.' },
      { title: '회원가입', description: '비밀번호를 입력해주세요.' },
    ],
  });

  const nextHandler = (currentNum: number) => {
    if (currentNum === 1) {
      if (registerFormState.agreeToTerms.pass) {
        setFormLayoutState({
          ...formLayoutState,
          currentNum: formLayoutState.currentNum + 1,
        });
      }
    } else if (currentNum === 2) {
      if (
        registerFormState.inputEmail.emailPass &&
        registerFormState.inputEmail.nickNamePass
      ) {
        setFormLayoutState({
          ...formLayoutState,
          currentNum: formLayoutState.currentNum + 1,
        });
      }
    } else if (currentNum === 3) {
      if (
        registerFormState.inputPassword.passwordPass &&
        registerFormState.inputPassword.passwordCheckPass
      ) {
        alert('회원 가입 완료');
        router.push('/');
      }
    }
  };

  return (
    <Container>
      <FormLayout
        formLayoutState={formLayoutState}
        setFormLayoutState={setFormLayoutState}
        nextHandler={nextHandler}
      >
        {formLayoutState.currentNum === 1 ? (
          <AgreeToTerms
            registerFormState={registerFormState}
            setRegisterFormState={setRegisterFormState}
          />
        ) : formLayoutState.currentNum === 2 ? (
          <InputInfo
            registerFormState={registerFormState}
            setRegisterFormState={setRegisterFormState}
          />
        ) : (
          <InputPassword
            registerFormState={registerFormState}
            setRegisterFormState={setRegisterFormState}
          />
        )}
      </FormLayout>
    </Container>
  );
};

export default RegisterForm;
