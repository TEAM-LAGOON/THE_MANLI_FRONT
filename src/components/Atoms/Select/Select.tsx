import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import { SelectPropsType } from './Select.types';

const Select: React.FC<SelectPropsType> = ({ ...props }) => {
  const { selectList, selectTitle, setSelectedValue } = props;

  const selectHandleChange = (e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;

    setSelectedValue(value);
  };

  return (
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
  );
};

export default Select;

const SelectContainer = styled.select`
  border: none;
  color: #597bad;
  padding: 0.75rem;
`;
