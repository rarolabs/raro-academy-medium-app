import { Outlet } from "react-router-dom";
import { Header } from "../Header/Index";

export const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);