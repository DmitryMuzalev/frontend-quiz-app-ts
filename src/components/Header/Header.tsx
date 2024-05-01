import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import { useContextApp } from 'hook/useContextApp';
import { LogoQuiz } from 'components/LogoQuiz/LogoQuiz';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { currentQuiz } = useContextApp();
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className={styles.header}>
      {path !== '/' && currentQuiz ? (
        <LogoQuiz images={currentQuiz.icon} name={currentQuiz.title} />
      ) : (
        <div></div>
      )}

      {/*  */}
      <ThemeSwitcher />
    </header>
  );
};
