import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useMultiInput from '../../../hooks/useMultiInput';
import { regexEmail } from '../../../utils';
import { Container, Input, Text } from '../../Atoms';
import { FormLayout, InputPassword } from '../../Modules';
import { ChangePasswordPropsType, inputCheckState } from './ChangePassword.types';

const ChangePassword: React.FC<ChangePasswordPropsType> = ({
  changePasswordState,
  setChangePasswordState,
}) => {
  const [inputValue, handleChangeInput] = useMultiInput({
    email: '',
    certification: '',
  });

  const [pass, setPass] = useState<inputCheckState>({
    email: undefined,
    certification: undefined,
  });

  useEffect(() => {
    emailCheck(inputValue.email);
  }, [inputValue.email]);

  const [formLayoutState, setFormLayoutState] = useState({
    maxNum: 3,
    currentNum: 1,
    text: [
      {
        title: '비밀번호 찾기',
        description: '비밀번호를 찾기 위해 ',
        subText: '이메일 인증이 필요합니다.',
      },
      {
        title: '이메일 인증',
        description: '인증번호를 발송하였습니다. ',
        subText: '받으신 인증번호를 입력해 주세요.',
      },
      { title: '회원가입', description: '인증 번호를 입력해주세요.' },
    ],
  });

  const nextHandler = (currentNum: number) => {
    if (currentNum === 1) {
      if (changePasswordState.inputEmail.emailPass) {
        setFormLayoutState({ ...formLayoutState, currentNum: currentNum + 1 });
      }
    } else if (currentNum === 2) {
      if (changePasswordState.inputCertification.certificationPass) {
        setFormLayoutState({ ...formLayoutState, currentNum: currentNum + 1 });
      }
    } else if (currentNum === 3) {
      if (
        changePasswordState.inputPassword.passwordPass &&
        changePasswordState.inputPassword.passwordCheckPass
      ) {
        alert('비밀 번호 변경 완료');
      }
    }
  };

  const emailCheck = (email: string) => {
    if (inputValue.email.length > 0) {
      const regexResult = regexEmail(email);
      setPass({ ...pass, email: regexResult });

      if (regexResult) {
        setChangePasswordState({
          ...changePasswordState,
          inputEmail: {
            ...changePasswordState.inputEmail,
            email: inputValue.email,
            emailPass: true,
          },
        });
      } else {
        setChangePasswordState({
          ...changePasswordState,
          inputEmail: {
            ...changePasswordState.inputEmail,
            emailPass: false,
          },
        });
      }
    }
  };
  const certificationCheck = (certification: string) => {
    // TODO: 인증 regexResult 부분 수정 필요
    const regexResult = true;
    setPass({ ...pass, email: regexResult });

    if (regexResult) {
      setChangePasswordState({
        ...changePasswordState,
        inputCertification: {
          ...changePasswordState.inputCertification,
          certification: inputValue.certification,
          certificationPass: true,
        },
      });
    } else {
      setChangePasswordState({
        ...changePasswordState,
        inputCertification: {
          ...changePasswordState.inputCertification,
          certificationPass: false,
        },
      });
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
          <Wrapper>
            <div className="input-wrapper">
              <Text type={'regular-s'} align={'left'} value={'이메일'} />
              <Input
                className={pass.email === false ? 'input-error' : ''}
                inputName={'email'}
                fontSize={'2rem'}
                padding={'1rem 2rem'}
                inputValue={inputValue.email}
                placeholderText={'이메일을 입력해주세요.'}
                onAction={handleChangeInput}
                onFocus={() => emailCheck(inputValue.email)}
              />
              {pass.email === false ? (
                <Text
                  style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                  type={'regular-sm'}
                  value={'이메일을 확인해 주세요.'}
                  color={'var(--error-500)'}
                  align={'left'}
                />
              ) : (
                <div style={{ height: '2rem' }} />
              )}
            </div>
          </Wrapper>
        ) : formLayoutState.currentNum === 2 ? (
          <Wrapper>
            <div className="input-wrapper">
              <Text type={'regular-s'} align={'left'} value={'인증번호'} />
              <Input
                className={pass.certification === false ? 'input-error' : ''}
                inputName={'certification'}
                fontSize={'2rem'}
                padding={'1rem 2rem'}
                inputValue={inputValue.certification}
                placeholderText={'인증번호를 입력해주세요.'}
                onAction={handleChangeInput}
                onFocus={() => certificationCheck(inputValue.certification)}
              />
              {pass.certification === false ? (
                <Text
                  style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                  type={'regular-sm'}
                  value={'인증번호를 확인해 주세요.'}
                  color={'var(--error-500)'}
                  align={'left'}
                />
              ) : (
                <div style={{ height: '2rem' }} />
              )}
            </div>
          </Wrapper>
        ) : (
          <InputPassword
            registerFormState={changePasswordState}
            setRegisterFormState={setChangePasswordState}
          />
        )}
      </FormLayout>
    </Container>
  );
};

export default ChangePassword;

const Wrapper = styled.div`
  width: 100%;
  color: var(--text-400);

  input {
    margin-top: 1rem;
  }

  & .input-wrapper {
    margin-bottom: 3rem;
  }
`;
