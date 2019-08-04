import * as React from 'react';
import { theme } from '../../../';
import styled from 'styled-components';
import { CardProps } from '../Card';
import { styleSystemCommon } from '../../../common/styleSystem';

export interface VerticalProps extends CardProps {}

const Wrapper = styled.div`
  ${styleSystemCommon}
`;

const ChildrenWrapper = styled.div`
  background-color: ${theme.backgroundColor.secondary};
  overflow: hidden;
  border-radius: ${theme.borderRadius.s};
`;

const Footer = styled.div`
  padding-top: ${theme.space.s};
`;

class Vertical extends React.Component<VerticalProps, any> {
  public render() {
    const { as, content, children, type, ...restProps } = this.props;

    const hasNoContent = !children && !content;
    const hasOnlyChildren = !!children && !content;

    if (hasNoContent) {
      return null;
    }

    if (hasOnlyChildren) {
      return (
        <ChildrenWrapper as={as} {...restProps}>
          {children}
        </ChildrenWrapper>
      );
    }

    return (
      <Wrapper as={as} {...restProps}>
        <ChildrenWrapper>{content}</ChildrenWrapper>

        <Footer>{children}</Footer>
      </Wrapper>
    );
  }
}

export default Vertical;
