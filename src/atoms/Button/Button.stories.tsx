import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import { text } from '@storybook/addon-knobs';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

const stories = storiesOf('Button', module);
stories.add('Button', () => {
  const groupId = 'buttonText';
  const name = text('Text', 'To continue, please click me', groupId);

  const content = `${name}`;

  return (
    <StorybookWrapper>
      <Section>
        <Button>{content}</Button>
      </Section>
    </StorybookWrapper>
  );
});
