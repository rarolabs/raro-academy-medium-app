/*
  src/components/Layout/index.tsx
*/
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);