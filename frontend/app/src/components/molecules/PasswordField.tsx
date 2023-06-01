import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordField = ({ ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </IconButton>
        ),
      }}
    />
  );
};

export default PasswordField;
