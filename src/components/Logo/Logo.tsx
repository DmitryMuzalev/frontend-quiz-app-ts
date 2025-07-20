import { useContextApp } from "hook/useContextApp";
import s from "./Logo.module.scss";

function Logo() {
  const { currentQuiz } = useContextApp();

  if (!currentQuiz) return <></>;

  const { icon, title } = currentQuiz;
  return (
    <div className={s.logo}>
      <img src={icon} alt={`icon quiz by theme ${title}`} />
      <span>{title}</span>
    </div>
  );
}

export { Logo };
