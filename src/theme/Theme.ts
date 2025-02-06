import { createTheme } from "@mui/material";

const Theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
  },
  palette: {
    background: {
      default:"#EEEEEE"
    },
    warning: {
      main:"#ff5722"
    },
    error: {
      main:"#b71c1c"
    }
  },
});

export default Theme;