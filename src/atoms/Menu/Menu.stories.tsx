import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Section, Button, Heading } from '../../';
import Menu, { MenuItem } from './';
import { ShoppingCart } from 'react-feather';

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

const content = (
  <>
    <Button>Click me</Button>
  </>
);

export const GridStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Section>
        <Heading as="h2">Menu</Heading>
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
    </StorybookWrapper>
  );
};

const stories = storiesOf('Menu', module);
stories.add('Default', GridStoryDefault);
