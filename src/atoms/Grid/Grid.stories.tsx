import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Heading, Button, Card } from '../../';
import Grid, { GridItem } from './';
import Image from '../Image';
import { theme } from '../../common/styles/theme';

const image = {
  width: 360,
  height: 480,
  sizes: [
    {
      url:
        'https://images.unsplash.com/photo-1523368355248-14a82c28c8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      width: 360,
      height: 480,
    },
  ],
};

const footer = (
  <>
    <Heading as="h2">Title of the card</Heading>
    <Button mt={theme.space.s}>Click me</Button>
  </>
);

export const GridStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Heading as="h1">Product list</Heading>
      <Grid as="ul" gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))">
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image {...image} />
          </Card>
        </GridItem>
      </Grid>
    </StorybookWrapper>
  );
};

const stories = storiesOf('Grid', module);
stories.add('Default', GridStoryDefault);
