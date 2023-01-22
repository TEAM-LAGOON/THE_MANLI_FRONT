import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { LoginForm, RegisterForm } from '../components';
import { useInput } from '../hooks';
import useMultiInput from '../hooks/useMultiInput';

const Test: NextPage = () => {
  const [registerFormState, setRegisterFormState] = useState({
    agreeToTerms: {
      0: false,
      1: false,
      2: false,
      pass: false,
    },
    inputEmail: { email: '', emailPass: false, nickName: '', nickNamePass: false },
    inputPassword: {
      password: '',
      passwordPass: false,
      passwordCheck: '',
      passwordCheckPass: false,
    },
  });

  useEffect(() => {
    console.log(registerFormState);
  }, [registerFormState]);

  // const [inputValue, handleChangeInput] = useMultiInput({ email: '', password: '' });

  // const LoginFormtestProps = {
  //   inputValue: inputValue,
  //   handleChangeInput: handleChangeInput,
  // };

  return (
    <>
      {/* <LoginForm {...LoginFormtestProps} /> */}
      <RegisterForm
        registerFormState={registerFormState}
        setRegisterFormState={setRegisterFormState}
      />
      <div style={{ maxWidth: '360px' }}></div>
    </>
  );
};

export default Test;
