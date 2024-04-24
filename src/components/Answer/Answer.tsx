import styles from "./Answer.module.scss";

interface AnswerProps {
  index: number;
  text: string;
  cb: (value: string) => void;
}

export const Answer = ({ index, text, cb }: AnswerProps) => {
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
    <button className={""} onClick={() => cb(text)}>
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
