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
    --primary-200: #8fe3db;
    --primary-400: #6cdbcf;
    --primary-500:#2FBFB0;
    --primary-600: #48d2c4;

    --quaternary-50: #ffeff9;
    --quaternary-200: #ff5dc8;
    --quaternary-400: #CC3D9C

    --secondary-200: #ffe45d;
    --secondary-400: #f2ce16;

    --text-100: #bbbbbb;
    --text-200: #999999;
    --text-400: #777777;
    --text-600: #555555;
    --text-800: #333333;

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
