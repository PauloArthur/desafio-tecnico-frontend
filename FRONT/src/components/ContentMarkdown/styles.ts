import styled, { css } from 'styled-components';

const lightThemeMarkdown = css`
  /* Tomorrow Theme */
  /* Original theme - https://github.com/chriskempson/tomorrow-theme */
  /* https://jmblog.github.io/color-themes-for-google-code-highlightjs */
  .tomorrow-comment,
  pre .comment,
  pre .title {
    color: #8e908c;
  }

  .tomorrow-red,
  pre .variable,
  pre .attribute,
  pre .tag,
  pre .regexp,
  pre .ruby .constant,
  pre .xml .tag .title,
  pre .xml .pi,
  pre .xml .doctype,
  pre .html .doctype,
  pre .css .id,
  pre .css .class,
  pre .css .pseudo {
    color: #c82829;
  }

  .tomorrow-orange,
  pre .number,
  pre .preprocessor,
  pre .built_in,
  pre .literal,
  pre .params,
  pre .constant {
    color: #f5871f;
  }

  .tomorrow-yellow,
  pre .class,
  pre .ruby .class .title,
  pre .css .rules .attribute {
    color: #eab700;
  }

  .tomorrow-green,
  pre .string,
  pre .value,
  pre .inheritance,
  pre .header,
  pre .ruby .symbol,
  pre .xml .cdata {
    color: #718c00;
  }

  .tomorrow-aqua,
  pre .css .hexcolor {
    color: #3e999f;
  }

  .tomorrow-blue,
  pre .function,
  pre .python .decorator,
  pre .python .title,
  pre .ruby .function .title,
  pre .ruby .title .keyword,
  pre .perl .sub,
  pre .javascript .title,
  pre .coffeescript .title {
    color: #4271ae;
  }

  .tomorrow-purple,
  pre .keyword,
  pre .javascript .function {
    color: #8959a8;
  }

  pre code {
    display: block;
    background: white;
    color: #4d4d4c;
    font-family: Menlo, Monaco, Consolas, monospace;
    line-height: 1.5;
    border: 1px solid #ccc;
    padding: 10px;
  }
`;

const darkThemeMarkdown = css`
  /* Tomorrow Night Theme */
  /* Original theme - https://github.com/chriskempson/tomorrow-theme */
  /* https://jmblog.github.io/color-themes-for-google-code-highlightjs */
  .tomorrow-comment,
  pre .comment,
  pre .title {
    color: #969896;
  }

  .tomorrow-red,
  pre .variable,
  pre .attribute,
  pre .tag,
  pre .regexp,
  pre .ruby .constant,
  pre .xml .tag .title,
  pre .xml .pi,
  pre .xml .doctype,
  pre .html .doctype,
  pre .css .id,
  pre .css .class,
  pre .css .pseudo {
    color: #cc6666;
  }

  .tomorrow-orange,
  pre .number,
  pre .preprocessor,
  pre .built_in,
  pre .literal,
  pre .params,
  pre .constant {
    color: #de935f;
  }

  .tomorrow-yellow,
  pre .class,
  pre .ruby .class .title,
  pre .css .rules .attribute {
    color: #f0c674;
  }

  .tomorrow-green,
  pre .string,
  pre .value,
  pre .inheritance,
  pre .header,
  pre .ruby .symbol,
  pre .xml .cdata {
    color: #b5bd68;
  }

  .tomorrow-aqua,
  pre .css .hexcolor {
    color: #8abeb7;
  }

  .tomorrow-blue,
  pre .function,
  pre .python .decorator,
  pre .python .title,
  pre .ruby .function .title,
  pre .ruby .title .keyword,
  pre .perl .sub,
  pre .javascript .title,
  pre .coffeescript .title {
    color: #81a2be;
  }

  .tomorrow-purple,
  pre .keyword,
  pre .javascript .function {
    color: #b294bb;
  }

  pre code {
    display: block;
    background: #1d1f21;
    color: #c5c8c6;
    font-family: Menlo, Monaco, Consolas, monospace;
    line-height: 1.5;
    border: 1px solid #ccc;
    padding: 10px;
  }
`;

export const Container = styled.div`
  height: 100%;
  max-height: 280px;
  padding: 8px 16px;
  border-radius: 4px;
  overflow: scroll;
  color: ${({ theme }) => theme.colors.text}E6;
  background-color: ${({ theme }) => theme.colors.text}1A;
  pre {
    padding: 0;
    code {
      overflow: scroll;
    }
  }
  &.dark-theme {
    ${darkThemeMarkdown}
  }
  &.light-theme {
    ${lightThemeMarkdown}
  }
`;
