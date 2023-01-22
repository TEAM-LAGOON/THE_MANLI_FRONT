import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import Icon from '../Icon';
import { InputContainerPropsType, InputPropsType } from './Input.types';

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
    inputName,
    bg,
  } = props;

  return (
    <>
      {iconName ? (
        <InputContainer bg={bg}>
          <InputRoot
            className={className}
            type={inputType || 'text'}
            {...props}
            placeholder={placeholderText}
            onChange={onAction}
            onClick={onClick}
            onFocus={onFocus}
            value={inputValue}
            name={inputName}
          />
          <Icon
            className={`${
              className === 'input-error' ? 'input-error-icon' : ''
            } input-icon`}
            name={iconName}
            style={{ width: '2.626rem', height: '1.688rem' }}
          />
        </InputContainer>
      ) : (
        <InputRoot
          className={className}
          type={inputType || 'text'}
          {...props}
          placeholder={placeholderText}
          onChange={onAction}
          onClick={onClick}
          onFocus={onFocus}
          value={inputValue}
          name={inputName}
        />
      )}
    </>
  );
};

export default Input;
const InputContainer = styled.div<InputContainerPropsType>`
  position: relative;

  & .input-icon {
    position: absolute;
    z-index: 1;
    top: 58%;
    right: 0;
    transform: translate(-50%, -50%);
    background: ${({ bg }) => (bg ? bg : '#fff')};
  }
`;

const InputRoot = styled.input<InputPropsType>`
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
`;
