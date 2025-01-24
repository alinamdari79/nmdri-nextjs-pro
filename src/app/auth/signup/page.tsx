"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
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
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  return (
    <Card elevation={10}>
      <CardContent sx={{ width: "424px" }}>
        <form action="">
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
                size="small"
                name="firstName"
                type="text"
                label="نام"
                maxRows={1}
                multiline
              />
              <TextField
                sx={{ width: "185px" }}
                size="small"
                name="lastName"
                type="text"
                label="نام خانوادگی"
                maxRows={1}
                multiline
              />
            </Stack>
            <TextField
              size="small"
              fullWidth
              name="email"
              type="email"
              label="رایانامه(ایمیل)"
            />
            <FormControl variant="outlined">
              <InputLabel size="small">گذرواژه</InputLabel>
              <OutlinedInput
                size="small"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel size="small">تکرار گذرواژه</InputLabel>
              <OutlinedInput
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
            </FormControl>
            <Typography variant="caption">
              با ثبت نام در این سرویس شما با تمامی{" "}
              <MuiLink component={Link} href="">
                قوانین و مقرارت
              </MuiLink>{" "}
              موافقت خود را اعلام می نمایید
            </Typography>
            <Button variant="contained">ثبت نام</Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}