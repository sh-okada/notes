import { postNote } from "@/api";
import { fields } from "@/consts/fields";
import { messageState } from "@/stores/atom";
import { PostRequest } from "@/types/api";
import { Box, Button, InputBase, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import FadeIn from "../atoms/FadeIn";
import MarkdownPreview from "../atoms/MarkdownPreview";
import MarkdownEditor from "../molecules/MarkdownEditor";

const PostForm = () => {
  const router = useRouter();
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

  const handleChangeValue = (value: string) => {
    setValue(body.property, value);
  };

  const onSubmit: SubmitHandler<PostRequest> = (data) => {
    postNote(data)
      .then(() => {
        setMessage({ serverity: "success", message: "保存しました" });
        router.replace("/notes");
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
      <FadeIn>
        <MarkdownEditor value={watch().body} onChange={handleChangeValue} />
      </FadeIn>
      <MarkdownPreview value={watch().body} />
    </Stack>
  );
};

export default PostForm;
