import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Lightbox from './Lightbox';

const stories = storiesOf('Lightbox', module);
stories.add('Lightbox', () => {
  const groupId = 'GROUP-ID1';
  const name = text('Name', 'Arunoda Susiripala', groupId);

  const content = `My name is ${name}.`;

  const images = [
    {
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
    },
    {
      width: 1100,
      height: 1100,
      aspectRatio: 100,
      sizes: [
        {
          url: 'https://dummyimage.com/1100x1100/fff/aaa',
          width: 1100,
          height: 1100,
        },
      ],
    },
  ];

  return (
    <StorybookWrapper>
      <Lightbox isOpen={true} images={images} />
    </StorybookWrapper>
  );
});
