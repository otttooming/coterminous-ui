import * as React from 'react';
import { common } from './Heading.style';
import styled from 'styled-components';
import { styleSystemCommon, styleSystemSpace } from '../../common/styleSystem';
import { StyleSystemCommonProps } from '../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../common/styleSystem/molecules/space';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {
  as: keyof JSX.IntrinsicElements;
}

export interface Props extends React.HTMLAttributes<HTMLElement>, WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.h1<WrapperProps>`
  ${common}
  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class Heading extends React.PureComponent<Props, any> {
  static defaultProps = {
    as: 'h1',
  };

  render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Heading;
