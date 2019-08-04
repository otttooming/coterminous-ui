import { css } from 'styled-components';
import { theme } from '../../common/styles/theme';

const common = css`
  background-color: ${theme.backgroundColor.secondary};
  border-radius: ${theme.borderRadius.s};
  padding: ${theme.space.l};
  overflow: hidden;
`;

export const sectionStyle = css`
  ${common};
`;
