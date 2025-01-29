"use client";
import React, { useActionState } from "react";
import {
  Stack,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Box,
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signup } from "@/actions/signup";

function LogInForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <form action={action}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="380px"
      >
        <Typography variant="h5">ورود</Typography>
        <MuiLink component={Link} href="/auth/signup">
          حساب کاربری ندارید؟
        </MuiLink>
      </Stack>
      <Stack width="380px" gap={2} mt={2}>
        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email}
          size="small"
          fullWidth
          name="email"
          type="email"
          label="رایانامه(ایمیل)"
        />
        <FormControl variant="outlined">
          <InputLabel error={!!state?.errors?.password} size="small">
            گذرواژه
          </InputLabel>
          <OutlinedInput
            error={!!state?.errors?.password}
            name="password"
            size="small"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText error>
            {state?.errors?.password?.map((e: string) => (
              <Box component="span" display="block" key={e}>
                {e}
              </Box>
            ))}
          </FormHelperText>
        </FormControl>
        <Stack
          display={"flex"}
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          <FormControlLabel
            control={<Checkbox color="warning" />}
            label="مرا بخاطر بسپار"
          />
          <MuiLink component={Link} href="#">
            گذر واژه خود را فراموش کرده اید ؟
          </MuiLink>
        </Stack>
        <Button
          type="submit"
          disabled={pending}
          variant="contained"
          color="warning"
        >
          ثبت نام
        </Button>
      </Stack>
    </form>
  );
}

export default LogInForm;
