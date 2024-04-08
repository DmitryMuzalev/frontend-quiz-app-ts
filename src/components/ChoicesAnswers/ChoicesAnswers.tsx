import styles from "./ChoicesAnswers.module.scss";

interface ChoicesAnswersProps {}

export const ChoicesAnswers = ({}: ChoicesAnswersProps) => (
  <div className={styles.choicesAnswers}>
    <div className="answersList">
      <button className="answer">
        <div className="iconBox">A</div>
        Colorful Style Sheets
      </button>
      <button className="answer">
        <div className="iconBox">B</div>
        Computer Style Sheets
      </button>
      <button className="answer">
        <div className="iconBox">C</div>
        Computer Style Sheets
      </button>
      <button className="answer">
        <div className="iconBox">D</div>
        Computer Style Sheets
      </button>
    </div>
    <button>Submit</button>
  </div>
);
