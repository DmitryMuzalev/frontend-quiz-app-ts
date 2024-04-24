import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";
import { useContextApp } from "hook/useContextApp";
import { LogoQuiz } from "components/LogoQuiz/LogoQuiz";

export const Header = () => {
  const { currentQuiz } = useContextApp();

  return (
    <header className={styles.header}>
      {currentQuiz ? (
        <LogoQuiz images={currentQuiz.icon} name={currentQuiz.title} />
      ) : (
        <div></div>
      )}

      {/*  */}
      <ThemeSwitcher />
    </header>
  );
};
