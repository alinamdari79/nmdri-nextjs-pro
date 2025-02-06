"use client";

import { styled } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "12px",
  marginBottom:"12px",
  marginRight:"12px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default DrawerHeader;
