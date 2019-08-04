import styled, { css } from 'styled-components';
import { theme } from '../../common/styles/theme';

export const arrowCorrection = '15px';

export const dropdownStyle = css`
  background: #fff;
  border-radius: ${theme.borderRadius.s};
  padding: ${theme.space.m};
  color: ${theme.color.primary};
  position: relative;
  min-width: 300px;
  box-shadow: 0 41px 66px 0 rgba(0, 0, 0, 0.2);
  max-height: 300px;
  overflow-y: scroll;
  &[data-placement*='bottom'] {
    top: ${arrowCorrection};
  }
  &[data-placement*='top'] {
    bottom: ${arrowCorrection};
  }
  &[data-placement*='right'] {
    left: ${arrowCorrection};
  }
  &[data-placement*='left'] {
    right: ${arrowCorrection};
  }
`;

export const Dropdown = styled.div`
  ${dropdownStyle};
`;
