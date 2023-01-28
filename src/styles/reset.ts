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

  a {
    color: #fff;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
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
