import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);
