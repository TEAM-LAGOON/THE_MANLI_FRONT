import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ChangePassword, LoginForm, RegisterForm } from '../components';
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

  // useEffect(() => {
  //   console.log(registerFormState);
  // }, [registerFormState]);

  // const [inputValue, handleChangeInput] = useMultiInput({ email: '', password: '' });

  // const LoginFormtestProps = {
  //   inputValue: inputValue,
  //   handleChangeInput: handleChangeInput,
  // };
  const [changePasswordState, setChangePasswordState] = useState({
    inputEmail: { email: '', emailPass: false },
    inputCertification: { certification: '', certificationPass: false },
    inputPassword: {
      password: '',
      passwordPass: false,
      passwordCheck: '',
      passwordCheckPass: false,
    },
  });

  useEffect(() => {
    console.log('?', changePasswordState);
  }, [changePasswordState]);
  return (
    <>
      {/* <LoginForm {...LoginFormtestProps} /> */}
      {/* <RegisterForm
        registerFormState={registerFormState}
        setRegisterFormState={setRegisterFormState}
      /> */}
      <ChangePassword
        changePasswordState={changePasswordState}
        setChangePasswordState={setChangePasswordState}
      />
      <div style={{ maxWidth: '360px' }}></div>
    </>
  );
};

export default Test;
