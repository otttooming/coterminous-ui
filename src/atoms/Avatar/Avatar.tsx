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
  title?: React.ReactNode;
  meta?: React.ReactNode;
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
