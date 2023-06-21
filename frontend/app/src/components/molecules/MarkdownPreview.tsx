import Prism from "prismjs";
import { useEffect } from "react";

import { md } from "@/libs/markdown";

interface Props {
  value: string;
}

const MarkdownPreview = ({ value }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(value),
      }}
    ></div>
  );
};

export default MarkdownPreview;
