import 'gfm.css/gfm.css';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

import { useTheme } from '@contexts/ThemeProvider';

import { Container } from './styles';

export const ContentMarkdown = ({ value }: { value: string }) => {
  const { isDarkMode } = useTheme();
  return (
    <Container
      className={`${isDarkMode ? 'dark-theme' : 'light-theme'} markdown-body`}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { prefix: '' }]]}
      >
        {value}
      </Markdown>
    </Container>
  );
};

export default ContentMarkdown;
