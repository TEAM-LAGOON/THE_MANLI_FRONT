import styled from '@emotion/styled';

import { useState } from 'react';
import useMultiInput from '../../../hooks/useMultiInput';
import { CheckBox, Container, Input, Text } from '../../Atoms';
import { FormLayout } from '../../Modules';
import { RegisterFormPropsType } from './RegisterForm.types';

const RegisterForm: React.FC<RegisterFormPropsType> = ({ ...props }) => {
  const { registerFormState, setRegisterFormState } = props;

  const [errMsg, setErrMsg] = useState({
    email: '',
    nickName: '',
    password: '',
    passwordCheck: '',
  });

  const [inputValue, handleChangeInput] = useMultiInput({
    email: '',
    nickName: '',
    password: '',
    passwordCheck: '',
  });

  const [formLayoutState, setFormLayoutState] = useState({
    maxNum: 3,
    currentNum: 1,
    text: [
      { title: '회원가입', description: '약관을 동의해 주세요.' },
      { title: '회원가입', description: '사용할 정보를 입력해주세요.' },
      { title: '회원가입', description: '비밀번호를 입력해주세요.' },
    ],
  });

  const nextPageCheck = (currentNum: number) => {
    if (currentNum === 1) {
      if (
        registerFormState.agreeToTerms[0] &&
        registerFormState.agreeToTerms[1] &&
        registerFormState.agreeToTerms[2]
      ) {
        return { result: true, msg: '', type: '' };
      } else {
        return { result: false, msg: '이용약관을 확인해 주세요.', type: '' };
      }
    } else if (currentNum === 2) {
      const { email, nickName } = inputValue;

      setErrMsg({
        email: '',
        nickName: '',
        password: '',
        passwordCheck: '',
      });

      if (validateEmail(email) && validateNickName(nickName)) {
        setRegisterFormState({
          ...registerFormState,
          inputEmail: {
            ...registerFormState.inputEmail,
            email: email,
            nickName: nickName,
          },
        });

        return { result: true, msg: '', type: '' };
      } else if (!validateEmail(email)) {
        return { result: false, msg: '이메일을 형식을 확인해 주세요.', type: 'email' };
      } else if (!validateNickName(nickName)) {
        return {
          result: false,
          msg: '닉네임은 3~10자 이내로 만들어 주세요.',
          type: 'nickName',
        };
      } else {
        return {
          result: false,
          msg: '회원 가입 정보를 확인해 주세요.',
          type: 'emailInput',
        };
      }
    } else if (currentNum === 3) {
      const { password, passwordCheck } = inputValue;

      if (!validatePassword(password)) {
        return {
          result: false,
          msg: '비밀번호는 8~15, 영문, 숫자 특수문자를 포함 해주세요.',
          type: 'password',
        };
      } else if (password !== passwordCheck) {
        return {
          result: false,
          msg: '비밀 번호가 일치하지 않습니다.',
          type: 'passwordCheck',
        };
      } else {
        setRegisterFormState({
          ...registerFormState,
          inputPassword: {
            ...registerFormState.inputPassword,
            password: password,
            passwordCheck: passwordCheck,
          },
        });

        return {
          result: true,
          msg: '',
          type: '',
        };
      }
    } else {
      return {
        result: true,
        msg: '',
        type: '',
      };
    }
  };

  const checkBoxHandler = (e: { target: { id: string; checked: boolean } }) => {
    const { id, checked } = e.target;

    if (id === '0' && checked) {
      setRegisterFormState({
        ...registerFormState,
        agreeToTerms: {
          [0]: checked,
          [1]: checked,
          [2]: checked,
        },
      });
    } else {
      setRegisterFormState({
        ...registerFormState,
        agreeToTerms: {
          ...registerFormState.agreeToTerms,
          [id]: checked,
        },
      });
    }
  };

  return (
    <FormLayout
      formLayoutState={formLayoutState}
      setFormLayoutState={setFormLayoutState}
      nextPageCheck={nextPageCheck}
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    >
      {formLayoutState.currentNum === 1 ? (
        // 약관 동의
        <AgreeToTerms>
          <div className="text-wrapper">
            <Text type={'regular-m'} value="약관 전체 동의" />
            <CheckBox
              id={'0'}
              onChangeCheckBox={checkBoxHandler}
              isChecked={registerFormState.agreeToTerms[0]}
            />
          </div>
          <div className="text-wrapper">
            <Text type={'regular-m'} value="이용약관 동의 (필수)" />
            <CheckBox
              id={'1'}
              onChangeCheckBox={checkBoxHandler}
              isChecked={registerFormState.agreeToTerms[1]}
            />
          </div>
          <div className="text-wrapper">
            <Text type={'regular-m'} value="개인 정보 수집 및 이용 동의" />
            <CheckBox
              id={'2'}
              onChangeCheckBox={checkBoxHandler}
              isChecked={registerFormState.agreeToTerms[2]}
            />
          </div>
        </AgreeToTerms>
      ) : formLayoutState.currentNum === 2 ? (
        // 이메일 및 닉네임 입력
        <InputInfo>
          <div className="InputInfo-wrapper">
            <Text type={'regular-s'} align={'left'} value={'이메일'} />
            <Input
              inputName={'email'}
              inputValue={inputValue.email}
              placeholderText={'이메일을 입력해주세요'}
              onAction={handleChangeInput}
            />
            {errMsg.email && (
              <Text
                style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                type={'regular-sm'}
                value={errMsg.email}
                color={'var(--error-500)'}
                align={'left'}
              />
            )}
          </div>
          <div className="InputInfo-wrapper">
            <Text type={'regular-s'} align={'left'} value={'닉네임'} />
            <Input
              inputName={'nickName'}
              inputValue={inputValue.nickName}
              placeholderText={'닉네임을 입력해주세요.'}
              onAction={handleChangeInput}
            />
            {errMsg.nickName && (
              <Text
                style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                type={'regular-sm'}
                value={errMsg.nickName}
                color={'var(--error-500)'}
                align={'left'}
              />
            )}
          </div>
        </InputInfo>
      ) : (
        // 비밀번호 입력 및 확인
        <InputInfo>
          <div className="InputInfo-wrapper">
            <Text type={'regular-s'} align={'left'} value={'비밀번호'} />
            <Input
              inputName={'password'}
              inputType={'password'}
              inputValue={inputValue.password}
              placeholderText={'비밀번호를 입력해주세요'}
              onAction={handleChangeInput}
            />
            {errMsg.password && (
              <Text
                style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                type={'regular-sm'}
                value={errMsg.password}
                color={'var(--error-500)'}
                align={'left'}
              />
            )}
          </div>
          <div className="InputInfo-wrapper">
            <Text type={'regular-s'} align={'left'} value={'비밀번호 재확인'} />
            <Input
              inputName={'passwordCheck'}
              inputType={'password'}
              inputValue={inputValue.passwordCheck}
              placeholderText={'비밀번호를 입력해주세요'}
              onAction={handleChangeInput}
            />
            {errMsg.passwordCheck && (
              <Text
                style={{ textIndent: '1rem', marginTop: '0.5rem' }}
                type={'regular-sm'}
                value={errMsg.passwordCheck}
                color={'var(--error-500)'}
                align={'left'}
              />
            )}
          </div>
        </InputInfo>
      )}
    </FormLayout>
  );
};

export default RegisterForm;

const AgreeToTerms = styled.div`
  color: var(--text-500);

  & .text-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`;
const InputInfo = styled.div`
  width: 100%;
  color: var(--text-400);

  input {
    margin-top: 1rem;
  }

  & .InputInfo-wrapper {
    margin-bottom: 3rem;
  }
`;

const validateEmail = (email: string): boolean => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const validateNickName = (nickName: string): boolean => {
  if (nickName.length <= 10 && nickName.length >= 3) return true;
  else return false;
};
const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{8,15}$/;

  return regex.test(password);
};
