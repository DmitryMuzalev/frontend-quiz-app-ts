import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  cb: () => void;
}

export const Button = ({ children, cb }: ButtonProps) => (
  <button className={styles.button} onClick={cb}>
    {children}
  </button>
);
