import * as React from 'react';
import styled from 'styled-components';
import { Image as ImageItem } from './Image.types';
import { getSrcSet } from './image.helper';

export type ImageProps = React.HTMLAttributes<HTMLElement> & ImageItem;

interface WrapperProps {
  aspectRatio: string;
}

const Figure = styled.figure<WrapperProps>`
  position: relative;
  margin: 0;
  padding-bottom: ${({ aspectRatio }) => aspectRatio};
`;

const ImageElement = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

const Image: React.FC<ImageProps> = ({
  srcSet,
  width,
  height,
  ...restProps
}) => {
  const aspectRatio = `${(height / width) * 100}%`;

  return (
    <Figure {...restProps} aspectRatio={aspectRatio}>
      <ImageElement width={width} height={height} srcSet={getSrcSet(srcSet)} />
    </Figure>
  );
};

export default Image;
