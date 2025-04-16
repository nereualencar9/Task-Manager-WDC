import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
import { CreateTasks } from "../pages/CreateTasks";
import { About } from "../pages/About";
import { Page404 } from "../pages/Page404";
import { App } from "../pages/App";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="/create-tasks" element={<CreateTasks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
