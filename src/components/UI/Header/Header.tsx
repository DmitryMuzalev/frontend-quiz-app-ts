import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Logo } from "components/UI/Logo/Logo";

function Header() {
  return (
    <header>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}

export { Header };
