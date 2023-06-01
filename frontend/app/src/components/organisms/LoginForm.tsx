import { login } from "@/api";
import { fields } from "@/consts/fields";
import { messageState } from "@/stores/atom";
import { UserPostRequest } from "@/types/api";
import { Button, Link, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import PasswordField from "../molecules/PasswordField";

const LoginForm = () => {
  const setMessage = useSetRecoilState(messageState);

  const { register, handleSubmit } = useForm<UserPostRequest>();

  const onSubmit: SubmitHandler<UserPostRequest> = (data) => {
    login(data)
      .then((_res) => {
        setMessage({
          message: `ログインしました`,
          serverity: "success",
        });
      })
      .catch((_res) => {
        setMessage({
          message: `IDまたはパスワードが間違っています`,
          serverity: "error",
        });
      });
  };

  const { id, password } = fields;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        label={id.label}
        {...register(id.property)}
      />
      <PasswordField
        variant="outlined"
        label={password.label}
        inputProps={{ ...register(password.property) }}
      />
      <Button type="submit" variant="contained" size="large">
        ログイン
      </Button>
      <Link fontSize="small" href="">
        パスワードを忘れた
      </Link>
    </Stack>
  );
};

export default LoginForm;