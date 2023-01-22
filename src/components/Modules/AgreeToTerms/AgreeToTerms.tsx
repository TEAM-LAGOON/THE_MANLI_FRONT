import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Text, CheckBox } from '../../Atoms';
import { AgreeToTermsPropsType } from './AgreeToTerms.types';

const AgreeToTerms: React.FC<AgreeToTermsPropsType> = ({
  registerFormState,
  setRegisterFormState,
}) => {
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
    } else if (
      id === '0' &&
      !checked &&
      registerFormState.agreeToTerms[0] &&
      registerFormState.agreeToTerms[1] &&
      registerFormState.agreeToTerms[2]
    ) {
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

  useEffect(() => {
    passCheck();
  }, [registerFormState]);

  const passCheck = () => {
    if (
      !registerFormState.agreeToTerms.pass &&
      registerFormState.agreeToTerms[0] &&
      registerFormState.agreeToTerms[1] &&
      registerFormState.agreeToTerms[2]
    ) {
      setRegisterFormState({
        ...registerFormState,
        agreeToTerms: {
          ...registerFormState.agreeToTerms,
          pass: true,
        },
      });
    } else if (
      registerFormState.agreeToTerms.pass &&
      (!registerFormState.agreeToTerms[0] ||
        !registerFormState.agreeToTerms[1] ||
        !registerFormState.agreeToTerms[2])
    ) {
      setRegisterFormState({
        ...registerFormState,
        agreeToTerms: {
          ...registerFormState.agreeToTerms,
          pass: false,
        },
      });
    }
  };

  return (
    <Wrapper>
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
        <Text type={'regular-m'} value="개인 정보 수집 및 이용 동의 (필수)" />
        <CheckBox
          id={'2'}
          onChangeCheckBox={checkBoxHandler}
          isChecked={registerFormState.agreeToTerms[2]}
        />
      </div>
    </Wrapper>
  );
};

export default AgreeToTerms;

const Wrapper = styled.div`
  color: var(--text-500);

  & .text-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`;
