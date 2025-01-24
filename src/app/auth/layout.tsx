import { Box } from "@mui/material";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{ display: "flex", marginTop:"70px", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </Box>
  );
}
