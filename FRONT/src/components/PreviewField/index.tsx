import { type PropsWithChildren, useState } from 'react';

import { ContentMarkdown } from '@components/index';

import {
  Container,
  IconWrapper,
  HidePreviewIcon,
  PreviewWrapper,
  ShowPreviewIcon,
} from './styles';

export const PreviewField = ({
  content,
  children,
}: PropsWithChildren<{ content: string }>) => {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <Container>
      {children}
      <IconWrapper
        onClick={() => {
          setIsPreview((curr) => !curr);
        }}
      >
        {isPreview ? <HidePreviewIcon /> : <ShowPreviewIcon />}
      </IconWrapper>
      <PreviewWrapper className={`${isPreview ? 'active' : ''}`}>
        <ContentMarkdown value={content} />
      </PreviewWrapper>
    </Container>
  );
};

export default PreviewField;
