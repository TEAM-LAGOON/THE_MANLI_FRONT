import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import Icon from '../Icon';
import { InputPropsType } from './Input.types';

const Input: React.FC<InputPropsType> = ({ ...props }) => {
  const {
    className,
    iconName,
    inputValue,
    placeholderText,
    inputType,
    onClick,
    onAction,
    onFocus,
    onBlur,
    inputName,
  } = props;

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <InputContainer {...props}>
        <input
          className={className}
          type={
            !iconName ? inputType || 'text' : iconName && toggle ? 'text' : 'password'
          }
          placeholder={placeholderText}
          onChange={onAction}
          onClick={onClick}
          onFocus={onFocus}
          value={inputValue}
          name={inputName}
        />
        {iconName && (
          <Icon
            onClick={toggleHandler}
            className={`${
              className === 'input-error' ? 'input-error-icon' : ''
            } input-icon`}
            name={iconName}
            style={{ width: '2.626rem', height: '1.688rem' }}
          />
        )}
      </InputContainer>
    </>
  );
};

export default Input;

const InputContainer = styled.div<InputPropsType>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: ${({ padding }) => (padding ? padding : '0.875rem 2rem')};
    background: ${({ bg }) => (bg ? bg : '#fff')};
    color: ${({ color }) => (color ? color : '#767676')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
    border: ${({ border }) => (border ? border : '1px solid #767676')};
    border-radius: ${({ radius }) => (radius ? radius : '12.375rem')};
    box-sizing: border-box;
    line-height: 150%;
    text-overflow: ellipsis;
  }

  & .input-error {
    color: var(--error-500);
    border: 1px solid var(--error-500);
    background-color: var(--error-50);
    outline: none;
  }

  & .input-error-icon {
    color: var(--error-500);
    background-color: var(--error-50);
    outline: none;
  }

  & .input-error::-webkit-input-placeholder {
    color: var(--error-500);
  }

  & .input-icon {
    position: absolute;
    z-index: 1;
    top: 58%;
    right: 0;
    transform: translate(-50%, -50%);
    background: ${({ iconBg }) => (iconBg ? iconBg : '#fff')};
  }
`;
