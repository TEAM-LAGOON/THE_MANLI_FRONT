import { css } from '@emotion/react';

export const reset = css`
  * {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }
  //safari issue
  input:is([type='button'], [type='submit'], [type='reset']),
  input[type='file']::file-selector-button,
  button {
    color: initial;
  }
  textarea,
  keygen,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
  }
`;
