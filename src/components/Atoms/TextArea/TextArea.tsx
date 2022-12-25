import { memo } from 'react';
import { TextAreaPropsType } from './TextArea.types';
import styled from '@emotion/styled';
import Text from '../Text';

const TextArea: React.FC<TextAreaPropsType> = ({ ...props }) => {
  console.log(props.value);
  return (
    <>
      <TextAreaContainer>
        <textarea
          name={props.name}
          id={props.id}
          placeholder={props.placeHolder || '설명을 입력해주세요.'}
          maxLength={props.maxLength || 250}
          value={props.value}
          onChange={props.onChangeEvent}
        ></textarea>
      </TextAreaContainer>
      <Text
        type={'regular-s'}
        color={'var(--text-300)'}
        align={'right'}
        value={(props?.value?.length || 0) + '/' + (props?.maxLength || 250)}
      />
    </>
  );
};

export default memo(TextArea);

const TextAreaContainer = styled.div<TextAreaPropsType>`
  padding-right: 4.25rem;

  textarea {
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '16rem'};
    padding: 1rem 2rem;
    background: var(--white);
    border: 0.125rem solid var(--surface-500);
    border-radius: 2rem;
    font-size: 2rem;
    line-height: 1.5;
    resize: none;

    ::placeholder {
      font-size: 2rem;
      color: var(--text-300);
    }

    :focus {
      outline: none !important;
      background: var(--white);
      border: 0.125rem solid var(--surface-500);
    }
  }

  & .count {
    margin-top: 8px;
  }
`;
