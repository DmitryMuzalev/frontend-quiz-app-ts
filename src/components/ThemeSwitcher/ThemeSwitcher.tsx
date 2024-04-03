import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.themeSwitcher}>
      <img
        src={
          isDark
            ? "./assets/images/icon-sun-light.svg"
            : "./assets/images/icon-sun-dark.svg"
        }
        alt="sun"
      />
      <label className={styles.switcher}>
        <input
          type="checkbox"
          id="themeSwitcher"
          checked={isDark}
          onChange={() => setIsDark((prev) => !prev)}
        />
        <span className={styles.switcherSlider}></span>
      </label>
      <img
        src={
          isDark
            ? "./assets/images/icon-moon-light.svg"
            : "./assets/images/icon-moon-dark.svg"
        }
        alt="moon"
      />
    </div>
  );
};
