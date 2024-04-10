import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";
import { LogoQuiz } from "components/LogoQuiz/LogoQuiz";

export const Header = () => (
  <header className={styles.header}>
    <LogoQuiz images="./assets/images/icon-html.svg" name="HTML" />
    <ThemeSwitcher />
  </header>
);
