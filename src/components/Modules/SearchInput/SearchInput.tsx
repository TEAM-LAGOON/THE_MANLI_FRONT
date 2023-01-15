import { SearchInputPropsType } from './SearchInput.types';
import styled from '@emotion/styled';

const SearchInput: React.FC<SearchInputPropsType> = ({ ...props }) => {
  return (
    <SearchFieldForm onSubmit={props.onKewordSearch}>
      <input
        type="text"
        className="keyword-search"
        placeholder="어디로 가고싶으신가요?"
        onChange={props.onChangeKeword}
        onKeyDown={e => e.key === 'Enter' && props.onChangeKeword}
      ></input>
      <button type="submit" className="search-icon" />
    </SearchFieldForm>
  );
};

const SearchFieldForm = styled.form`
  width: 100%;
  display: flex;
  position: relative;

  & > input {
    width: 100%;
    height: 5rem;
    border: 1px solid var(--surface-500);
    border-radius: 99px;
    outline: none;
    padding: 1rem 2rem;
    box-sizing: border-box;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5;
    &::placeholder {
      color: var(--text-200);
    }
  }

  & > button {
    position: absolute;
    background: url('/svgs/search.svg') 100% 100%;
    background-size: cover;
    border: none;
    width: 3rem;
    height: 3rem;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
  }
`;
export default SearchInput;
