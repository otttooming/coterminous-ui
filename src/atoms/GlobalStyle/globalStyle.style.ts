import { css } from 'styled-components';
import { theme } from '../../common/styles/theme';
import { customProperties } from '../../common/styles/customProperties';

export const globalStyleCss = css`
  ${customProperties}

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: ${theme.lineHeight.s};
    font-family: ${theme.fontFamily.primary};
    color: ${theme.textColor.primary};
    background-color: ${theme.backgroundColor.primary};
  }
`;
