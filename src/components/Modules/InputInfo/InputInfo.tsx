import { inputCheckState, InputInfoPropsType } from './InputInfo.types';
import { Input, Text } from '../../Atoms';
import styled from '@emotion/styled';
import useMultiInput from '../../../hooks/useMultiInput';
import { regexEmail, regexNickName } from '../../../utils';
import { useEffect, useState } from 'react';

const InputInfo: React.FC<InputInfoPropsType> = ({
  registerFormState,
  setRegisterFormState,
}) => {
  const [inputValue, handleChangeInput] = useMultiInput({
    email: '',
    nickName: '',
  });
  const [pass, setPass] = useState<inputCheckState>({
    email: undefined,
    nickName: undefined,
  });

  useEffect(() => {
    emailCheck(inputValue.email);
  }, [inputValue.email]);

  useEffect(() => {
    nickNameCheck(inputValue.nickName);
  }, [inputValue.nickName]);

  const emailCheck = (email: string) => {
    if (inputValue.email.length > 0) {
      const regexResult = regexEmail(email);
      setPass({ ...pass, email: regexResult });

      if (regexResult) {
        setRegisterFormState({
          ...registerFormState,
          inputEmail: {
            ...registerFormState.inputEmail,
            email: inputValue.email,
            emailPass: true,
          },
        });
      } else {
        setRegisterFormState({
          ...registerFormState,
          inputEmail: {
            ...registerFormState.inputEmail,
            emailPass: false,
          },
        });
      }
    }
  };
  const nickNameCheck = (nickName: string) => {
    if (inputValue.nickName.length > 0) {
      const regexResult = regexNickName(nickName);

      setPass({ ...pass, nickName: regexResult });

      if (regexResult) {
        setRegisterFormState({
          ...registerFormState,
          inputEmail: {
            ...registerFormState.inputEmail,
            nickName: inputValue.nickName,
            nickNamePass: true,
          },
        });
      } else {
        setRegisterFormState({
          ...registerFormState,
          inputEmail: {
            ...registerFormState.inputEmail,
            nickNamePass: false,
          },
        });
      }
    }
  };

  return (
    <Wrapper>
      <div className="InputInfo-wrapper">
        <Text type={'regular-s'} align={'left'} value={'이메일'} />
        <Input
          className={pass.email === false ? 'input-error' : ''}
          inputName={'email'}
          fontSize={'2rem'}
          padding={'1rem 2rem'}
          inputValue={inputValue.email}
          placeholderText={'이메일을 입력해주세요'}
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
      <div className="InputInfo-wrapper">
        <Text type={'regular-s'} align={'left'} value={'닉네임'} />
        <Input
          className={pass.nickName === false ? 'input-error' : ''}
          fontSize={'2rem'}
          padding={'1rem 2rem'}
          inputName={'nickName'}
          inputValue={inputValue.nickName}
          placeholderText={'닉네임을 입력해주세요.'}
          onAction={handleChangeInput}
          onFocus={() => nickNameCheck(inputValue.nickName)}
        />
        {pass.nickName === false ? (
          <Text
            style={{ textIndent: '1rem', marginTop: '0.5rem' }}
            type={'regular-sm'}
            value={'닉네임은 3 ~ 10자 이내로 만들어 주세요.'}
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

export default InputInfo;

const Wrapper = styled.div`
  width: 100%;
  color: var(--text-400);

  input {
    margin-top: 1rem;
  }

  & .InputInfo-wrapper {
    margin-bottom: 3rem;
  }
`;
