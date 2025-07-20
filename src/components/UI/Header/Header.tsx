import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import s from "./Header.module.scss";
import { Logo } from "components/Logo/Logo";

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}

export { Header };
