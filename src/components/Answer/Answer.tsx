import { clsx } from "clsx";
import styles from "./Answer.module.scss";
import { useContextApp } from "hook/useContextApp";

interface AnswerProps {
  index: number;
  text: string;
}

export const Answer = ({ index, text }: AnswerProps) => {
  const { selectedAnswer, currentQuestion, isChecked, selectAnswer } =
    useContextApp();

  const isSelected = text === selectedAnswer;
  const isCorrect = text === currentQuestion?.answer;
  let letter: string;
  switch (index) {
    case 1:
      letter = "B";
      break;
    case 2:
      letter = "C";
      break;
    case 3:
      letter = "D";
      break;
    default:
      letter = "A";
  }

  const answerStyles = clsx(
    "listItem",
    styles.answer,
    !isChecked && isSelected && styles.answerSelect,
    isChecked && isCorrect && styles.answerCorrect,
    isChecked && isSelected && !isCorrect && styles.answerError
  );

  return (
    <button
      className={answerStyles}
      onClick={() => selectAnswer(text)}
      disabled={isChecked}
    >
      <div className={styles.answerIcon + " " + "icon"}>{letter}</div>
      <p className={styles.answerText}>{text}</p>
      <div className={styles.answerStatus}></div>
    </button>
  );
};

/*  
<img src="./assets/images/icon-correct.svg" alt="correct" />
<img src="./assets/images/icon-error.svg" alt="error" /> 
*/
