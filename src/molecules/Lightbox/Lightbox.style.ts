import styled, { css } from 'styled-components';
import { photoswipeStyle } from './atoms/photoswipe.style';

export const lightboxStyle = css`
  ${photoswipeStyle}
`;

export const Lightbox = styled.div`
  ${lightboxStyle}
`;
