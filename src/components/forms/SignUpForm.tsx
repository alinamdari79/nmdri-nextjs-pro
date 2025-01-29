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
  FormHelperText,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import { signup } from "@/actions/signup";

function SignUpForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="380px"
      >
        <Typography variant="h5">ثبت نام</Typography>
        <MuiLink component={Link} href="/auth/login">
          آیا قبلا ثبت نام کرده اید ؟
        </MuiLink>
      </Stack>
      <Stack width="380px" gap={2}>
        <Stack mt={2} direction="row" justifyContent="space-between">
          <TextField
            sx={{ width: "185px" }}
            error={!!state?.errors?.firstName}
            helperText={state?.errors?.firstName}
            size="small"
            name="firstName"
            type="text"
            label="نام"
            maxRows={1}
            multiline
          />
          <TextField
            sx={{ width: "185px" }}
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName}
            size="small"
            name="lastName"
            type="text"
            label="نام خانوادگی"
            maxRows={1}
            multiline
          />
        </Stack>
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
            {state?.errors.password?.map((e: string) => (
              <Box component="span" display="block" key={e}>
                {e}
              </Box>
            ))}
          </FormHelperText>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel error={!!state?.errors?.password} size="small">
            تکرار گذرواژه
          </InputLabel>
          <OutlinedInput
            error={!!state?.errors?.confirmPassword}
            name="confirmPassword"
            size="small"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showConfirmPassword
                      ? "hide the password"
                      : "display the password"
                  }
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText error>
            {state?.errors?.confirmPassword?.map((e: string) => (
              <Box component="span" display="block" key={e}>
                {e}
              </Box>
            ))}
          </FormHelperText>
        </FormControl>
        <Typography variant="caption">
          با ثبت نام در این سرویس شما با تمامی{" "}
          <MuiLink component={Link} href="">
            قوانین و مقرارت
          </MuiLink>{" "}
          موافقت خود را اعلام می نمایید
        </Typography>
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

export default SignUpForm;
