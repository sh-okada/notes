import { passwordStrength, postUser } from "@/api";
import { fields } from "@/consts/fields";
import { messageState } from "@/stores/atom";
import { StrengthResponse, UserPostRequest } from "@/types/api";
import {
  Alert,
  AlertTitle,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import PasswordField from "../molecules/PasswordField";
import StrengthChecker from "../molecules/StrengthChecker";

const SignUpForm = () => {
  const [strength, setStrength] = useState<StrengthResponse>();
  const setMessage = useSetRecoilState(messageState);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPostRequest>();

  const onSubmit: SubmitHandler<UserPostRequest> = (data) => {
    postUser(data)
      .then((res) => {
        setMessage({
          message: `登録完了しました`,
          serverity: "success",
        });
      })
      .catch((res) => {
        setMessage({
          message: `入力されたIDは既に使用されています`,
          serverity: "error",
        });
      });
  };

  const { id, name, password } = fields;

  useEffect(() => {
    passwordStrength({ password: watch().password }).then((res) => {
      setStrength(res.data);
    });
  }, [watch().password]);

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        label={id.label}
        error={errors.id ? true : false}
        helperText={errors.id?.message}
        {...register(id.property, id.schemas)}
      />
      <TextField
        variant="outlined"
        label={name.label}
        error={errors.name ? true : false}
        helperText={errors.name?.message}
        {...register(name.property, name.schemas)}
      />
      <PasswordField
        variant="outlined"
        label={password.label}
        error={errors.password ? true : false}
        helperText={errors.password?.message}
        inputProps={{ ...register(password.property, password.schemas) }}
      />
      <StrengthChecker strength={strength?.strength ?? "terrible"} />
      <Button type="submit" variant="contained" size="large">
        新規登録
      </Button>
      <Alert variant="outlined" severity="info">
        <AlertTitle>注意事項</AlertTitle>
        <Typography fontSize="small">・ログインIDは変更できません。</Typography>
      </Alert>
    </Stack>
  );
};

export default SignUpForm;
