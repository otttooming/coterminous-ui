import * as React from 'react';
import styled from 'styled-components';
import { styleSystemSpace } from '../../../common/styleSystem';
import { StyleSystemCommonProps } from '../../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../../common/styleSystem/molecules/space';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface MenuItemProps extends WrapperProps {}

const Wrapper = styled.li`
  list-style: none;

  ${styleSystemSpace}
`;

class MenuItem extends React.PureComponent<MenuItemProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default MenuItem;
