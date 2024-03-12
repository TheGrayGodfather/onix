import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFD699",
      main: "#FFBB55",
      dark: "#FCA311",
    },
    secondary: {
      light: "#6A7EAB",
      main: "#40587F",
      dark: "#14213D",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
