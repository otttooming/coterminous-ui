import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../common/styles/theme';
import {
  GridGapProps,
  gridGap,
  GridTemplateAreasProps,
  gridTemplateRows,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  gridTemplateAreas,
} from 'styled-system';
import { styleSystemCommon, styleSystemSpace } from '../../common/styleSystem';
import { StyleSystemCommonProps } from '../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../common/styleSystem/molecules/space';

interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps,
    GridGapProps,
    GridTemplateAreasProps,
    GridTemplateRowsProps,
    GridTemplateColumnsProps {}

export interface GridProps
  extends React.HTMLAttributes<HTMLElement>,
    WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.ul<WrapperProps>`
  margin: 0;
  padding: 0;

  ${styleSystemCommon}
  ${styleSystemSpace}
  ${gridGap}
  ${gridTemplateAreas}
  ${gridTemplateRows}
  ${gridTemplateColumns}
`;

class Grid extends React.PureComponent<GridProps, any> {
  static defaultProps = {
    display: 'grid',
    as: 'div',
    gridGap: theme.space.l,
  };

  public render() {
    const {
      children,

      ...restProps
    } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Grid;
