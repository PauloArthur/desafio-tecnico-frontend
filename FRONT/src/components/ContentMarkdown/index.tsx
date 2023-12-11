import 'gfm.css/gfm.css';
import { Container } from './styles';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useTheme } from '@contexts/ThemeProvider';

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
