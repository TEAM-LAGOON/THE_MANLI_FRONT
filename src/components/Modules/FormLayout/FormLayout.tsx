import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, Text } from '../../Atoms';
import Stepper from '../../Atoms/Stepper';
import { FormLayoutPropsType } from './FormLayout.types';

const FormLayout: React.FC<FormLayoutPropsType> = ({ children, ...props }) => {
  const { formLayoutState, setFormLayoutState, nextHandler } = props;

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
        {formLayoutState.currentNum === 1 ? (
          <Link href={'/'}>
            <a>
              <Button
                bg={'none'}
                color={'var(--secondary-700)'}
                padding={'1.25rem 2.5rem'}
                weight={'600'}
                fontSize={'2rem'}
              >
                홈으로
              </Button>
            </a>
          </Link>
        ) : (
          <Button
            bg={'none'}
            color={'var(--secondary-700)'}
            padding={'1.25rem 2.5rem'}
            weight={'600'}
            fontSize={'2rem'}
            onAction={() => {
              setFormLayoutState({
                ...formLayoutState,
                currentNum: formLayoutState.currentNum - 1,
              });
            }}
          >
            이전
          </Button>
        )}
        {formLayoutState.currentNum === formLayoutState.maxNum ? (
          <Link href={''}>
            <a>
              <Button
                bg={'var(--primary-500)'}
                color={'var(--white)'}
                padding={'1.25rem 2.5rem'}
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
            padding={'1.25rem 2.5rem'}
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
  font-size: 2rem;

  & .stepper {
    margin-bottom: 4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--surface-500);

  button {
    width: fit-content;
    margin: 1.25rem 0;
  }
`;
