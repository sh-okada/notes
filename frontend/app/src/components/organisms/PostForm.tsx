import { postNote } from "@/api";
import { fields } from "@/consts/fields";
import { md } from "@/libs/markdown";
import { messageState } from "@/stores/atom";
import { PostRequest } from "@/types/api";
import { Box, Button, InputBase, Stack } from "@mui/material";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const PostForm = () => {
  const setMessage = useSetRecoilState(messageState);
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostRequest>({
    reValidateMode: "onSubmit",
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const { title, body } = fields;

  const options = useMemo(() => {
    return {
      indentWithTabs: false,
      placeholder: "Write in Markdown",
      spellChecker: false,
      status: false,
      toolbar: false,
    } as EasyMDE.Options;
  }, []);

  const handeChangeValue = (value: string) => {
    setValue(body.property, value);
  };

  const onSubmit: SubmitHandler<PostRequest> = (data) => {
    postNote(data)
      .then(() => {
        setMessage({ serverity: "success", message: "保存しました" });
      })
      .catch(() => {
        setMessage({ serverity: "error", message: "保存できませんでした" });
      });
  };

  useEffect(() => {
    errors.title &&
      setMessage({ serverity: "error", message: errors.title.message! });
  }, [errors.title]);

  return (
    <Stack component="form" spacing={5} onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <InputBase
          placeholder={title.label}
          {...register(title.property, title.schemas)}
          sx={{ fontWeight: "bold", fontSize: 30 }}
          fullWidth
        />
        <Box>
          <Button type="submit" variant="contained">
            保存
          </Button>
        </Box>
      </Box>
      <SimpleMde
        value={watch().body}
        onChange={handeChangeValue}
        options={options}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(watch().body),
        }}
      ></div>
    </Stack>
  );
};

export default PostForm;
