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
    }
  },
});

export default Theme;