import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '.';
import { text } from '@storybook/addon-knobs';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { BookOpen } from 'react-feather';

const stories = storiesOf('Link', module);
stories.add('Link', () => {
  const groupId = 'LinkText';
  const name = text('Text', 'To continue, please click me', groupId);

  const content = `${name}`;

  return (
    <StorybookWrapper>
      <Section>
        <Link onClick={() => {}} href="https://github.com/otttooming">
          {content}
        </Link>
      </Section>
      <Section>
        <Link variant="link">{content}</Link>
      </Section>
      <Section>
        <Link icon={<BookOpen />}>{content}</Link>
      </Section>
      <Section>
        <Link icon={<BookOpen />} variant="link" href="/">
          {content}
        </Link>
      </Section>
    </StorybookWrapper>
  );
});
