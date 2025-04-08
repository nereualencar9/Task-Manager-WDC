import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app.routes";

export function AppRoutes() {
  const login = true;
  const routes = login ? <AppRouter /> : <AppRouter />;
  return <BrowserRouter>{routes}</BrowserRouter>;
}
