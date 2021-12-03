import { CopyBlock, pojoaque } from "react-code-blocks";

function CodeBlockCo({ text, language, showLineNumbers }) {
    return (
      <CopyBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={pojoaque}
        wrapLines
      />
    );
  }

export default CodeBlockCo