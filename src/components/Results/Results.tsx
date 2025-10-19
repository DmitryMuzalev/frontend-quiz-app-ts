import { Button } from "components/UI/Button/Button";
import s from "./Result.module.scss";
import { Logo } from "components/UI/Logo/Logo";
import { useContextApp } from "hook/useContextApp";

function Results() {
  const { score, currentQuiz, handelResetGame } = useContextApp();

  return (
    <>
      <div className="greeting">
        <h2>
          <span>Quiz completed </span>
          <span>Your scored...</span>
        </h2>
      </div>

      <div className={s.wrapper}>
        <div className={s.result + " " + "badge"}>
          <Logo />
          <span className={s.score}>{score}</span>
          <span className={"small-text"}>{`out of ${
            currentQuiz ? currentQuiz.questions.length : 0
          }`}</span>
        </div>
      </div>
      <Button onClick={handelResetGame}>Play again</Button>
    </>
  );
}

export { Results };
