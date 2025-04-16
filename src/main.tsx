import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRoutes } from "./routes/index.tsx";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
