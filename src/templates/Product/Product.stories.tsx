import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import {
  Heading,
  Button,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuItem,
  theme,
} from '../../';

const image = {
  width: 1200,
  height: 1200,
  aspectRatio: 100,
  sizes: [
    {
      url: 'https://dummyimage.com/1200x1200/fff/aaa',
      width: 1200,
      height: 1200,
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
    <Heading as="h2">Title of the card</Heading>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.space.s,
      }}
    >
      20$
      <Button>Click me</Button>
    </div>
  </>
);

const content = (
  <>
    <Button>Click me</Button>
  </>
);

const stories = storiesOf('Product', module);

stories.add('Default', () => (
  <StorybookWrapper style={{ margin: 0 }}>
    <Grid
      gridTemplateAreas="'sidebar content'"
      gridTemplateColumns="16rem 1fr"
      gridGap="0"
      style={{ minHeight: '100vh' }}
    >
      <GridItem
        area="sidebar"
        style={{
          padding: theme.space.l,
          paddingRight: theme.space.xl,
          backgroundColor: '#E6EDF3',
        }}
      >
        <div>
          <Image {...logo} />

          <Heading as="h2">Menu</Heading>

          <Menu>
            <MenuItem mt="8px">{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
          </Menu>
        </div>
      </GridItem>

      <GridItem
        area="content"
        style={{
          padding: theme.space.l,
          paddingLeft: theme.space.xl,
        }}
      >
        <Grid gridTemplateColumns="minmax(320px, 1fr) 1fr" gridGap="48px">
          <GridItem>
            <Image {...image} />
          </GridItem>
          <GridItem>
            <Heading as="h1">Product name</Heading>

            <p>Description</p>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </StorybookWrapper>
));
