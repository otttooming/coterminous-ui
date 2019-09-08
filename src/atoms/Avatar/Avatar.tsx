import * as React from 'react';
import {
  MainWrapper,
  TitleWrapper,
  ContentWrapper,
  Wrapper,
  MetaWrapper,
} from './Avatar.styles';

interface AvatarProps {
  initials?: React.ReactNode;
  /**
   * Main content that would most commonly include author title.
   */
  title?: React.ReactNode;
  /**
   * Render date and other applicable meta information next to main title.
   */
  meta?: React.ReactNode;
  /**
   * Main application is to consume <img /> and <svg />
   * Will accept Gatsby sourced image assets and standard provided tags.
   * Modified in CSS to apply relevant size adjustments.
   * Styles specific to applicable tags.
   */
  children?: React.ReactNode;
}

const Main: React.FC<AvatarProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

const Title: React.FC<AvatarProps> = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const Content: React.FC<AvatarProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const Avatar: React.FC<AvatarProps> = ({ meta, title, children }) => {
  const hasContent = title || meta;

  return (
    <Wrapper>
      {children && <Main>{children}</Main>}

      {hasContent && (
        <MetaWrapper>
          {title && <Title>{title}</Title>}
          {meta && <Content>{meta}</Content>}
        </MetaWrapper>
      )}
    </Wrapper>
  );
};

export default Avatar;
