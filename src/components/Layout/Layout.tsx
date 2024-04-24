import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Outlet />
      </div>
    </>
  );
};
