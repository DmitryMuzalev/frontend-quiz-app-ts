import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

import { ReactComponent as SunDarkIcon } from "assets/images/icon-sun-dark.svg";
import { ReactComponent as SunLightIcon } from "assets/images/icon-sun-light.svg";
import { ReactComponent as MoonDarkIcon } from "assets/images/icon-moon-dark.svg";
import { ReactComponent as MoonLightIcon } from "assets/images/icon-moon-light.svg";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.themeSwitcher}>
      {isDark ? <SunLightIcon /> : <SunDarkIcon />}
      <label className={styles.switcher}>
        <input
          type="checkbox"
          id="themeSwitcher"
          checked={isDark}
          onChange={() => setIsDark((prev) => !prev)}
        />
        <span className={styles.switcherSlider}></span>
      </label>
      {isDark ? <MoonLightIcon /> : <MoonDarkIcon />}
    </div>
  );
};
