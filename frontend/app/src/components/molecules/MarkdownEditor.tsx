import { Stack } from "@mui/material";
import "easymde/dist/easymde.min.css";
import markdownit from "markdown-it";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const MarkdownEditor = () => {
  const [markdownValue, setMarkdownValue] = useState("");

  const options = useMemo(() => {
    return {
      placeholder: "Write in Markdown",
      spellChecker: false,
      status: false,
      toolbar: false,
    } as EasyMDE.Options;
  }, []);

  const handeChangeValue = (value: string) => {
    setMarkdownValue(value);
  };

  return (
    <>
      <SimpleMde
        value={markdownValue}
        onChange={handeChangeValue}
        options={options}
      />
      <Stack>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownit().render(markdownValue),
          }}
        ></div>
      </Stack>
    </>
  );
};

export default MarkdownEditor;
