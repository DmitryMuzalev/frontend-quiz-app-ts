import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";
import { ReactComponent as AccessibilityIcon } from "assets/images/icon-accessibility.svg";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    {/*<div className={styles.headerLabel}>
      <div className={styles.headerLabelIcon}>
        <AccessibilityIcon />
      </div>
      Accessibility
    </div> */}
    <div></div>
    <ThemeSwitcher />
  </header>
);
