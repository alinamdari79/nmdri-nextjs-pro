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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import brandImage from "../../../../public/asstes/bg-login.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Card
      elevation={10}
      sx={{ display: "flex", width: "848px", flexDirection: "row" }}
    >
      <CardContent sx={{ width: "424px" }}>
        <form action="">
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

            <Stack
              display={"flex"}
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={2}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="مرا بخاطر بسپار"
              />
              <MuiLink component={Link} href="#">
                گذر واژه خود را فراموش کرده اید ؟
              </MuiLink>
            </Stack>
            <Button variant="contained">ثبت نام</Button>
          </Stack>
        </form>
      </CardContent>
      <Image
        style={{ width: "424px", height: "400px" }}
        src={brandImage}
        alt="SSS"
      />
    </Card>
  );
}