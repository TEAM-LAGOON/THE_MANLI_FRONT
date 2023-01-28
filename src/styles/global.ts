import { css } from '@emotion/react';
import { font } from './font';
import { reset } from './reset';

export const global = css`
  ${font}
  ${reset}

  html {
    font-family: 'Pretendard';
    font-size: 8px;

    @media (max-width: 360px) {
      width: 100vw;
      height: 100vh;
      font-size: 1.6vw;
    }
  }

  /* color 변경 예정 */
  :root {
    --primary-50: #d6f5f2;
    --primary-100: #bfebe7;
    --primary-200: #8fe3db;
    --primary-300: #74d4ca;
    --primary-400: #6cdbcf;
    --primary-500: #2fbfb0;
    --primary-600: #48d2c4;
    --primary-700: #21887d;
    --primary-800: #1a6961;
    --primary-900: #14504a;

    --secondary-50: #f2f7fe;
    --secondary-100: #d7e6fc;
    --secondary-200: #c4d9fa;
    --secondary-300: #a9c8f8;
    --secondary-400: #98bdf6;
    --secondary-500: #7eadf4;
    --secondary-600: #739dde;
    --secondary-700: #597bad;
    --secondary-800: #455f86;
    --secondary-900: #354966;

    --surface-50: #f6f7f8;
    --surface-100: #e2e5eb;
    --surface-200: #d5d8e1;
    --surface-300: #c1c7d3;
    --surface-400: #b5bcca;
    --surface-500: #a3abbd;
    --surface-600: #949cac;
    --surface-700: #747986;
    --surface-800: #5a5e68;
    --surface-900: #44484f;

    --text-50: #ebebeb;
    --text-100: #c0c0c0;
    --text-200: #a1a1a1;
    --text-300: #767676;
    --text-400: #5c5c5c;
    --text-500: #333333;
    --text-600: #2e2e2e;
    --text-700: #242424;
    --text-800: #1c1c1c;
    --text-900: #151515;

    --error-50: #f9eaec;
    --error-100: #ebbfc3;
    --error-200: #e29fa6;
    --error-300: #d4747e;
    --error-400: #cc5965;
    --error-500: #bf2f3e;
    --error-600: #ae2b38;
    --error-700: #88212c;
    --error-800: #691a22;
    --error-900: #50141a;

    --white: #ffffff;
    --black: #000000;
  }

  //중앙 정렬
  & .text-center {
    text-align: center;
  }

  //커서 pointer
  & .cursor-pointer {
    cursor: pointer;
  }

  //position 중앙정렬
  .resp-img-center {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  //* 복사 금지
  .stop-dragging {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  //두 줄 이상 말줄임표
  & .text-ellipsis-two-line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  //네 줄 이상 말줄임표
  & .text-ellipsis-four-line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
