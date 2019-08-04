import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Card from './';
import { Heading, Button } from '../../';
import styled from 'styled-components';
import { GridStoryDefault } from '../../atoms/Grid/Grid.stories';
import Image from '../../atoms/Image';

const image = {
  width: 1200,
  height: 1200,
  aspectRatio: 100,
  sizes: [
    {
      url: 'https://via.placeholder.com/1200',
      width: 1200,
      height: 1200,
    },
  ],
};

const footer = (
  <>
    <Heading as="h1">Title of the card</Heading>
    <Button>Click me</Button>
  </>
);

const CardStyled = styled(Card)`
  max-width: 320px;
`;

const stories = storiesOf('Card', module);
stories
  .add('Default', () => {
    return (
      <StorybookWrapper>
        <Card content={footer}>
          <Image {...image} />
        </Card>
      </StorybookWrapper>
    );
  })
  .add('Grid', GridStoryDefault)
  .add('Without title', () => {
    return (
      <StorybookWrapper>
        <Card content={footer}>
          <Image {...image} />
        </Card>
      </StorybookWrapper>
    );
  })
  .add('Without image', () => {
    return (
      <StorybookWrapper>
        <Card>
          <Image {...image} />
        </Card>
      </StorybookWrapper>
    );
  })
  .add('Card with expanded styled attributes', () => {
    return (
      <StorybookWrapper>
        <CardStyled content={footer}>
          <Image {...image} />
        </CardStyled>
      </StorybookWrapper>
    );
  });
