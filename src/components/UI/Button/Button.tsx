import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ children, ...props }: Props) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);
