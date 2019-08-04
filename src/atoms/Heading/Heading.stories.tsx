import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Heading', module).add('Heading', () => (
  <StorybookWrapper>
    <Section>
      <Heading as="h1">Heading</Heading>
      <Heading as="h2">Heading</Heading>
      <Heading as="h3">Heading</Heading>
      <Heading as="h4">Heading</Heading>
      <Heading as="h5">Heading</Heading>
      <Heading as="h6">Heading</Heading>

      <Heading as="h1" ml={[0, 42]}>
        Heading
      </Heading>
    </Section>
  </StorybookWrapper>
));
