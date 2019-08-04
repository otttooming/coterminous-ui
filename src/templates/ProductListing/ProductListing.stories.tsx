import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import {
  Heading,
  Button,
  Card,
  Grid,
  GridItem,
  Section,
  Image,
  Menu,
  MenuItem,
  theme,
} from '../../';

const image = {
  width: 1234,
  height: 1851,
  aspectRatio: 100,
  sizes: [
    {
      url:
        'https://images.unsplash.com/photo-1523368355248-14a82c28c8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      width: 1234,
      height: 1851,
    },
  ],
};

const logo = {
  width: 640,
  height: 360,
  aspectRatio: 1,
  sizes: [
    {
      url: 'https://dummyimage.com/640x360/fff/aaa',
      width: 640,
      height: 360,
    },
  ],
};

const footer = (
  <>
    <Heading as="h3">Title of the card</Heading>
  </>
);

const content = (
  <>
    <Button>Click me</Button>
  </>
);

const stories = storiesOf('Product listing', module);

stories.add('Default', () => (
  <StorybookWrapper style={{ margin: 0 }}>
    <Grid
      gridTemplateAreas="'sidebar content'"
      gridTemplateColumns="16rem 1fr"
      gridGap={theme.space.xl}
      maxWidth={1680}
      ml="auto"
      mr="auto"
      pt={64}
      pb={64}
      pl={32}
      pr={32}
    >
      <GridItem area="sidebar">
        <Section>
          <Image {...logo} />
        </Section>

        <Heading as="h2">Menu</Heading>

        <Section>
          <Menu>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
          </Menu>
        </Section>
      </GridItem>

      <GridItem area="content">
        <Heading as="h2">Product list</Heading>

        <Grid
          as="ul"
          gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))"
          gridGap={theme.space.xl}
        >
          {[...Array(16)].map((item, index) => (
            <GridItem as="li" key={index}>
              <Card content={footer}>
                <Image {...image} />
              </Card>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
    </Grid>
  </StorybookWrapper>
));
