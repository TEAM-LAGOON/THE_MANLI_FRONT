import styled from '@emotion/styled';
import { CheckBoxPropsType } from './CheckBox.types';

const CheckBox: React.FC<CheckBoxPropsType> = ({ ...props }) => {
  const { className, id, isChecked, onChangeCheckBox } = props;

  return (
    <CheckBoxContainer className={className}>
      <div className="checkbox-wrapper">
        <div className="round">
          <input
            type="checkbox"
            id={id}
            onChange={e => onChangeCheckBox(e)}
            checked={isChecked ? true : false}
          />
          <label htmlFor={id}></label>
        </div>
      </div>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
  & .round {
    position: relative;
  }

  label {
    background-color: var(--white);
    border: 1px solid var(--surface-200);
    border-radius: 50%;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    display: block;
  }

  label:after {
    border: 2px solid var(--white);
    border-top: none;
    border-right: none;
    content: '';
    height: 0.5rem;
    left: 0.65rem;
    opacity: 0;
    position: absolute;
    top: 0.55rem;
    transform: rotate(-45deg);
    width: 1rem;
  }

  input[type='checkbox'] {
    visibility: hidden;
    display: none;
    opacity: 0;
  }

  input[type='checkbox']:checked + label {
    background-color: var(--primary-300);
    border-color: var(--primary-300);
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`;
