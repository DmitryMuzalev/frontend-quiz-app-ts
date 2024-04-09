import styles from "./Answer.module.scss";

interface AnswerProps {
  index: number;
  text: string;
}

export const Answer = ({ index, text }: AnswerProps) => {
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

  return (
    <button className={styles.answer + " " + "listItem"}>
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
