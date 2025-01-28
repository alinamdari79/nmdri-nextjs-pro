import { Box } from "@mui/material";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"70px", marginBottom:"30px" }}
    >
      {children}
    </Box>
  );
}
