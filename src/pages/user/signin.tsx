import { NextPage } from 'next';
import { LoginForm } from '../../components';
import useLocalStorage from '../../hooks/useLocalStorage';
import useMultiInput from '../../hooks/useMultiInput';

const SignIn: NextPage = () => {
  const [localStorageValue, setLocalStorageValue, delStorage] = useLocalStorage(
    'THE-MANLI-EMAIL',
    '',
  );

  const [inputValue, handleChangeInput] = useMultiInput({
    email: localStorageValue,
    password: '',
  });

  const LoginFormProps = {
    inputValue: inputValue,
    handleChangeInput: handleChangeInput,
    localStorageValue: localStorageValue,
    setLocalStorageValue: setLocalStorageValue,
    delStorage: delStorage,
  };

  return <LoginForm {...LoginFormProps} />;
};

export default SignIn;
