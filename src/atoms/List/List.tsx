import * as React from 'react';
import styled from 'styled-components';
import { styleSystemCommon, styleSystemSpace } from '../../common/styleSystem';
import { StyleSystemCommonProps } from '../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../common/styleSystem/molecules/space';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface ListProps extends WrapperProps {}

const Wrapper = styled.ul`
  list-style: none;

  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class List extends React.PureComponent<ListProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default List;
