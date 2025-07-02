import { useEffect } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { useLocalStorage } from "hook/useLocalStorage";

export const ThemeSwitcher = () => {
  const [theme, setIsDark] = useLocalStorage<"dark" | "light">(
    "light",
    "theme"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.themeSwitcher}>
      <img
        src={
          theme === "dark"
            ? "./assets/images/icon-sun-light.svg"
            : "./assets/images/icon-sun-dark.svg"
        }
        alt="sun"
      />
      <label className={styles.switcher}>
        <input
          type="checkbox"
          id="themeSwitcher"
          checked={theme === "dark"}
          onChange={() => {
            setIsDark(theme === "dark" ? "light" : "dark");
          }}
        />
        <span className={styles.switcherSlider}></span>
      </label>
      <img
        src={
          theme === "dark"
            ? "./assets/images/icon-moon-light.svg"
            : "./assets/images/icon-moon-dark.svg"
        }
        alt="moon"
      />
    </div>
  );
};
