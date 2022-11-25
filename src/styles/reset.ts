import { css } from '@emotion/react';

export const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: -0.02em;
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
