import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import css from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={css.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
