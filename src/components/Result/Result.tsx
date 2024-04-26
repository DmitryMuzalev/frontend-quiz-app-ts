import styles from "./Result.module.scss";
import { Button } from "components/Button/Button";
import { LogoQuiz } from "components/LogoQuiz/LogoQuiz";
import { useContextApp } from "hook/useContextApp";

interface ResultProps {}

export const Result = ({}: ResultProps) => {
  const { currentQuiz, score, numberQuestion, resetApp } = useContextApp();
  return (
    <>
      <h2>
        <span>Quiz completed</span>
        <span>Your scored...</span>
      </h2>
      <div className={styles.result}>
        {currentQuiz ? (
          <LogoQuiz images={currentQuiz.icon} name={currentQuiz.title} />
        ) : (
          <div></div>
        )}
        <div className={styles.resultScore}>{score}</div>
        <p className="textInfo">{`out of ${numberQuestion}`}</p>
      </div>
      <Button cb={resetApp}>Play again</Button>
    </>
  );
};
