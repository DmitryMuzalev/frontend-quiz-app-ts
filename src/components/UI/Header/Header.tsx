import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div>Логотип</div>
      <div>Переключатель темы</div>
    </header>
  );
}

export { Header };
