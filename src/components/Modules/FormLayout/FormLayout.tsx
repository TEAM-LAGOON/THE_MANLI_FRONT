import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, Text } from '../../Atoms';
import Stepper from '../../Atoms/Stepper';
import { FormLayoutPropsType } from './FormLayout.types';
import { useRouter } from 'next/router';

const FormLayout: React.FC<FormLayoutPropsType> = ({ children, ...props }) => {
  const { formLayoutState, setFormLayoutState, nextPageCheck, errMsg, setErrMsg } = props;
  const router = useRouter();

  const nextHandler = (currentNum: number) => {
    const checkNext = nextPageCheck(currentNum);

    if (checkNext.result && currentNum === 3) {
      // confirm
      router.push('/');
    } else if (checkNext.result) {
      setFormLayoutState({
        ...formLayoutState,
        currentNum: formLayoutState.currentNum + 1,
      });
    } else {
      setErrMsg({ ...errMsg, [checkNext.type]: checkNext.msg });
    }
  };

  return (
    <>
      <StepperWrapper>
        <Stepper
          currentNum={formLayoutState.currentNum}
          maxNum={formLayoutState.maxNum}
        />
        <Text
          type={'semibold-l'}
          value={formLayoutState.text[formLayoutState.currentNum - 1].title}
        />
        <Text
          type={'regular-m'}
          value={formLayoutState.text[formLayoutState.currentNum - 1].description}
        />
      </StepperWrapper>
      {children}
      <ButtonWrapper>
        <Link href={'/'}>
          <a>
            <Button bg={'none'} color={'var(--black)'}>
              홈으로
            </Button>
          </a>
        </Link>
        {formLayoutState.currentNum === formLayoutState.maxNum ? (
          <Link href={''}>
            <a>
              <Button
                bg={'var(--primary-500)'}
                color={'var(--white)'}
                onAction={() => {
                  nextHandler(formLayoutState.currentNum);
                }}
              >
                완료
              </Button>
            </a>
          </Link>
        ) : (
          <Button
            bg={'var(--primary-500)'}
            color={'var(--white)'}
            onAction={() => nextHandler(formLayoutState.currentNum)}
          >
            다음
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};

export default FormLayout;

const StepperWrapper = styled.div`
  margin: 6rem 0 4rem 0;

  & .stepper {
    margin-bottom: 4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--surface-500);

  button {
    min-width: 5.25rem;
    height: 3rem;
    width: fit-content;
    margin: 1.25rem 0;
  }
`;
