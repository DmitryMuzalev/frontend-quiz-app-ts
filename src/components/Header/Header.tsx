import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    <div></div>
    <ThemeSwitcher />
  </header>
);
