import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import Section from '../Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Image from './Image';

const stories = storiesOf('Image', module);
stories.add('Image', () => {
  const groupId = 'GROUP-ID1';
  const name = text('Name', 'Arunoda Susiripala', groupId);

  const content = `My name is ${name}.`;

  const image = {
    width: 360,
    height: 640,
    aspectRatio: 100,
    srcSet: [
      {
        url: 'https://dummyimage.com/360x640/333/aaa',
        width: 360,
        height: 640,
      },
    ],
  };

  const landscape = {
    width: 640,
    height: 360,
    aspectRatio: 100,
    srcSet: [
      {
        url: 'https://dummyimage.com/640x360/333/aaa',
        width: 640,
        height: 360,
      },
    ],
  };

  return (
    <StorybookWrapper>
      <Section p={0} style={{ width: 420 }}>
        <Image {...image} />
      </Section>
      <Section style={{ width: 420 }}>
        <Image {...landscape} />
      </Section>
    </StorybookWrapper>
  );
});
