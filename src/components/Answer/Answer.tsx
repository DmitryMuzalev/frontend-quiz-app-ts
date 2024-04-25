import { clsx } from "clsx";
import styles from "./Answer.module.scss";

interface AnswerProps {
  index: number;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isChecked: boolean;
  cb: (value: string) => void;
}

export const Answer = ({
  index,
  text,
  cb,
  isSelected,
  isCorrect,
  isChecked,
}: AnswerProps) => {
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
      onClick={() => cb(text)}
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
