import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  cb: () => void;
}

export const Button = ({ children, isDisabled, cb }: ButtonProps) => (
  <button className={styles.button} onClick={cb} disabled={isDisabled}>
    {children}
  </button>
);
