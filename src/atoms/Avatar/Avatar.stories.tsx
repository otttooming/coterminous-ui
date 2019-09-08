import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '.';
import { text } from '@storybook/addon-knobs';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { User } from 'react-feather';
import { Link } from '../../';

const stories = storiesOf('Avatar', module);
stories.add('Avatar', () => {
  const groupId = 'buttonText';
  const name = text('Text', 'Jane Doe', groupId);

  const title = `${name}`;
  const content = `2019 Dec`;

  return (
    <StorybookWrapper>
      <Section>
        <Avatar>
          <User size="25" />
        </Avatar>
      </Section>

      <Section>
        <Avatar>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"></img>
        </Avatar>
      </Section>

      <Section>
        <Avatar meta={content} title={<Link href="#">Jane Doe</Link>}>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"></img>
        </Avatar>
      </Section>

      <Section>
        <Avatar title={title} meta={content} />
      </Section>

      <div style={{ marginTop: 40 }}>
        <Avatar title={title} meta={content} />
      </div>
    </StorybookWrapper>
  );
});
