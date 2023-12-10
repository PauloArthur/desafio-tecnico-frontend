import 'gfm.css/gfm.css';
import { Container } from './styles';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export const ContentMarkdown = ({ value }: { value: string }) => {
  return (
    <Container className="Markdown-content markdown-body">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {value}
      </Markdown>
    </Container>
  );
};

export default ContentMarkdown;
