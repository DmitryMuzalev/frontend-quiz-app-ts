import { Logo } from "components/UI/Logo/Logo";
import { useContextApp } from "hook/useContextApp";

function Results() {
  const { score, currentQuiz, handelResetGame } = useContextApp();

  return (
    <div className="badge">
      <p>Конец игры</p>
      <div>
        <p>
          <Logo />
          <span>{score}</span>
          <span>{`out of ${
            currentQuiz ? currentQuiz.questions.length : 0
          }`}</span>
        </p>
      </div>
      <button onClick={handelResetGame}>Play again</button>
    </div>
  );
}

export { Results };
