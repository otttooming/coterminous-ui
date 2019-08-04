import * as React from 'react';
import styled from 'styled-components';
import {
  styleSystemCommon,
  styleSystemSpace,
} from '../../../common/styleSystem';
import { StyleSystemCommonProps } from '../../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../../common/styleSystem/molecules/space';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface ListItemProps extends WrapperProps {}

const Wrapper = styled.li`
  list-style: none;

  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class ListItem extends React.PureComponent<ListItemProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default ListItem;
