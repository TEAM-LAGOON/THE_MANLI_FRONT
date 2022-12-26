import styled from '@emotion/styled';
import Icon from '../Icon';
import { SelectPropsType } from './Select.types';

const Select: React.FC<SelectPropsType> = ({ ...props }) => {
  const { selectList, selectTitle, setSelectedValue, iconName } = props;

  const selectHandleChange = (e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;

    setSelectedValue(value);
  };

  return (
    <Container>
      <SelectContainer name="select" onChange={selectHandleChange}>
        {selectTitle && (
          <option selected disabled>
            {selectTitle}
          </option>
        )}
        {selectList?.map((text, index) => (
          <option value={text} key={index}>
            {text}
          </option>
        ))}
      </SelectContainer>
      <Icon name={iconName} className={iconName} />
    </Container>
  );
};

export default Select;
const Container = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 9rem;
    background-color: #fff;
    width: 3rem;
    stroke: var(--secondary-700);
  }
  & .swap {
    top: 0.8rem;
  }
  & .caret_down_outline {
    top: 1.2rem;
  }
`;
const SelectContainer = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 12.125rem;
  border: none;
  color: var(--secondary-700);
  padding: 0.75rem;
  font-size: 1.75rem;
  font-weight: 600;
`;
