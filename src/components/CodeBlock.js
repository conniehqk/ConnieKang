import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlockCo({ text, language, showLineNumbers }) {
    return (
      <CopyBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        wrapLines
      />
    );
  }

export default CodeBlockCo