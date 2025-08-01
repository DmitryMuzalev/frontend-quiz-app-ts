import s from "./Box.module.scss";

type Props = {
  children: React.ReactNode;
  theme?: string;
};

export const Box = ({ children, theme }: Props) => (
  <div className={`${s.box} ${theme ? s[`box--${theme}`] : ""}`}>
    {children}
  </div>
);
