import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Section } from '../../';
import Checkbox from './';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <StorybookWrapper>
    <Section>
      <Checkbox name="test_field" value="test value">
        Input value
      </Checkbox>
      <Checkbox name="test_field" value="test value">
        Input value
      </Checkbox>
      <Checkbox name="test_field" value="test value">
        Input value
      </Checkbox>
      <Checkbox name="test_field" value="test value">
        Input value
      </Checkbox>
    </Section>
  </StorybookWrapper>
));
