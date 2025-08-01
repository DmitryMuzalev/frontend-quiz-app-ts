import s from "./Logo.module.scss";
import { useContextApp } from "hook/useContextApp";
import { Icon } from "../Icon/Icon";

function Logo() {
  const { currentQuiz } = useContextApp();

  if (!currentQuiz) return <></>;

  const { icon, title } = currentQuiz;
  return (
    <div className={s.logo}>
      <Icon icon={icon} name={title} />
      <span>{title}</span>
    </div>
  );
}

export { Logo };
