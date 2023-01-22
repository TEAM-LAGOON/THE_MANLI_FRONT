import styled from '@emotion/styled';
import { inputCheckState, InputPasswordPropsType } from './InputPassword.types';
import { Icon, Input, Text } from '../../Atoms';
import useMultiInput from '../../../hooks/useMultiInput';
import { useEffect, useState } from 'react';
import { regexPassword, regexPasswordLength } from '../../../utils';

const InputPassword: React.FC<InputPasswordPropsType> = ({
  registerFormState,
  setRegisterFormState,
}) => {
  const [inputValue, handleChangeInput] = useMultiInput({
    password: '',
    passwordCheck: '',
  });
  const [pass, setPass] = useState<inputCheckState>({
    passwordLength: undefined,
    passwordRegex: undefined,
    passwordCheck: undefined,
  });

  useEffect(() => {
    if (inputValue.password.length < 1) {
      setPass({
        passwordLength: undefined,
        passwordRegex: undefined,
        passwordCheck: undefined,
      });
    } else {
      passwordLengthCheck(inputValue.password);
      passwordRegexCheck(inputValue.password);
    }
  }, [inputValue.password]);

  useEffect(() => {
    passwordCheckedCheck(inputValue.passwordCheck);
  }, [inputValue.passwordCheck]);

  const passwordLengthCheck = (password: string) => {
    if (inputValue.password.length > 0) {
      const regexResult = regexPasswordLength(password);
      setPass({ ...pass, passwordLength: regexResult });

      if (regexResult && pass.passwordRegex) {
        setRegisterFormState({
          ...registerFormState,
          inputPassword: {
            ...registerFormState.inputPassword,
            password: inputValue.password,
            passwordPass: true,
          },
        });
      } else {
        setRegisterFormState({
          ...registerFormState,
          inputPassword: {
            ...registerFormState.inputPassword,
            passwordPass: false,
          },
        });
      }
    }
  };
  const passwordRegexCheck = (password: string) => {
    if (inputValue.password.length > 0) {
      const regexResult = regexPassword(password);
      setPass({ ...pass, passwordRegex: regexResult });

      if (pass.passwordLength && regexResult) {
        setRegisterFormState({
          ...registerFormState,
          inputPassword: {
            ...registerFormState.inputPassword,
            password: inputValue.password,
            passwordPass: true,
          },
        });
      } else {
        setRegisterFormState({
          ...registerFormState,
          inputPassword: {
            ...registerFormState.inputPassword,
            passwordPass: false,
          },
        });
      }
    }
  };
  const passwordCheckedCheck = (passwordCheck: string) => {
    if (inputValue.password === passwordCheck) {
      setPass({ ...pass, passwordCheck: true });

      setRegisterFormState({
        ...registerFormState,
        inputPassword: {
          ...registerFormState.inputPassword,
          passwordCheck: inputValue.passwordCheck,
          passwordCheckPass: true,
        },
      });
    } else if (inputValue.passwordCheck.length > 0) {
      setPass({ ...pass, passwordCheck: false });
    }
  };

  return (
    // 비밀번호 입력 및 확인
    <Wrapper>
      <div className="InputInfo-wrapper">
        <Text type={'regular-s'} align={'left'} value={'비밀번호'} />
        <Input
          className={
            (pass.passwordLength === true && pass.passwordRegex === true) ||
            (pass.passwordLength === undefined && pass.passwordRegex === undefined)
              ? ''
              : 'input-error'
          }
          fontSize={'2rem'}
          padding={'1rem 2rem'}
          inputName={'password'}
          inputType={'password'}
          iconName={'eye'}
          placeholderText={'비밀번호를 입력해주세요'}
          inputValue={inputValue.password}
          onAction={handleChangeInput}
          onFocus={() => {
            passwordRegexCheck(inputValue.password);
            passwordLengthCheck(inputValue.password);
          }}
        />
        <div className="regex-check">
          <Icon
            name="check"
            className="check-Icon"
            style={{
              color:
                pass.passwordLength === undefined
                  ? 'var(--text-400)'
                  : pass.passwordLength
                  ? 'var(--primary-500)'
                  : 'var(--error-500)',
            }}
          />
          <Text
            type={'regular-sm'}
            value={'8 ~ 15자 내외'}
            color={
              pass.passwordLength === undefined
                ? 'var(--text-400)'
                : pass.passwordLength
                ? 'var(--primary-500)'
                : 'var(--error-500)'
            }
            align={'left'}
          />

          <Icon
            name="check"
            className="check-Icon"
            style={{
              color:
                pass.passwordRegex === undefined
                  ? 'var(--text-400)'
                  : pass.passwordRegex
                  ? 'var(--primary-500)'
                  : 'var(--error-500)',
            }}
          />
          <Text
            type={'regular-sm'}
            value={'영문, 숫자, 특수문자 포함'}
            color={
              pass.passwordRegex === undefined
                ? 'var(--text-400)'
                : pass.passwordRegex
                ? 'var(--primary-500)'
                : 'var(--error-500)'
            }
            align={'left'}
          />
        </div>
      </div>
      <div className="InputInfo-wrapper">
        <Text type={'regular-s'} align={'left'} value={'비밀번호 재확인'} />
        <Input
          className={pass.passwordCheck ? '' : 'input-error'}
          fontSize={'2rem'}
          padding={'1rem 2rem'}
          inputName={'passwordCheck'}
          inputType={'password'}
          placeholderText={'비밀번호를 입력해주세요'}
          iconName={'eye'}
          inputValue={inputValue.passwordCheck}
          onAction={handleChangeInput}
          onFocus={() => {
            passwordCheckedCheck(inputValue.passwordCheck);
          }}
        />
        {!pass.passwordCheck ? (
          <Text
            style={{ textIndent: '1rem', marginTop: '0.5rem' }}
            type={'regular-sm'}
            value={'비밀번호가 일치하지 않습니다.'}
            color={'var(--error-500)'}
            align={'left'}
          />
        ) : (
          <div style={{ height: '2rem' }} />
        )}
      </div>
    </Wrapper>
  );
};

export default InputPassword;

const Wrapper = styled.div`
  width: 100%;
  color: var(--text-400);

  input {
    margin-top: 1rem;
  }

  & .InputInfo-wrapper {
    margin-bottom: 3rem;
  }

  & .regex-check {
    display: flex;
    text-indent: 1rem;
    margin-top: 0.5rem;
    line-height: 150%;

    & .check-Icon {
      width: 1.875rem;
      height: 1.875rem;
      padding: 0.062rem;
      margin-right: 0.812rem;
      margin-left: 1.562rem;
    }
  }
`;
