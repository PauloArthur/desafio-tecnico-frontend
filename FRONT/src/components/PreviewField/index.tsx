import { type PropsWithChildren, useState } from 'react';
import {
  Container,
  IconWrapper,
  HidePreviewIcon,
  PreviewWrapper,
  ShowPreviewIcon,
} from './styles';
import ContentMarkdown from '../ContentMarkdown';

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
