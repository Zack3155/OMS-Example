import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppProvider } from "./contexts/AppContext";
import Routes from "./routes";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Noto Sans S",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
