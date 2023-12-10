import 'gfm.css/gfm.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
export const ContentMarkdown = ({ value }: { value: string }) => {
  return (
    <div className="Markdown-content markdown-body">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {value}
      </Markdown>
    </div>
  );
};

export default ContentMarkdown;
