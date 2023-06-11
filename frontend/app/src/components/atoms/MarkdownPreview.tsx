import { md } from "@/libs/markdown";

interface Props {
  value: string;
}

const MarkdownPreview = ({ value }: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(value),
      }}
    ></div>
  );
};

export default MarkdownPreview;
