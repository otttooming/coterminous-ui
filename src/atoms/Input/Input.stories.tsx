import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Input', module).add('Default', () => (
  <StorybookWrapper>
    <Section>
      <Input />
    </Section>
  </StorybookWrapper>
));
