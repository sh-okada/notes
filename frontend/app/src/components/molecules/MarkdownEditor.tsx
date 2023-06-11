import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: Props) => {
  const options = useMemo(() => {
    return {
      indentWithTabs: false,
      placeholder: "Write in Markdown",
      spellChecker: false,
      status: false,
      toolbar: false,
    } as EasyMDE.Options;
  }, []);

  return <SimpleMde value={value} onChange={onChange} options={options} />;
};

export default MarkdownEditor;
