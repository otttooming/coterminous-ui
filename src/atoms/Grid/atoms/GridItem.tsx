import * as React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  area: string;
}

interface GridItemProps
  extends React.HTMLAttributes<HTMLElement>,
    WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.div<WrapperProps>`
  grid-area: ${({ area }) => area};
  list-style: none;
`;

class GridItem extends React.PureComponent<GridItemProps, any> {
  static defaultProps = {
    as: 'div',
    area: '',
  };

  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default GridItem;
