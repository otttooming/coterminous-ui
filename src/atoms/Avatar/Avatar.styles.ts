import styled from 'styled-components';
import { theme } from '../../common/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainWrapper = styled.span`
  width: ${theme.space.xl};
  height: ${theme.space.xl};
  line-height: ${theme.space.l};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${theme.backgroundColor.primary};
  border-radius: 50%;
  font-weight: ${theme.fontWeight.semiBold};
  overflow: hidden;

  > * {
    width: 100%;
  }

  > svg {
    width: ${theme.fontSize.l};
  }
`;

export const MetaWrapper = styled.span`
  display: block;
  margin-left: ${theme.space.s};

  &:only-child {
    margin-left: 0;
  }
`;

export const TitleWrapper = styled.span`
  display: block;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: ${theme.fontSize.s};
`;

export const ContentWrapper = styled.span`
  display: block;
  font-size: ${theme.fontSize.s};
`;
