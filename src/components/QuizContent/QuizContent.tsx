import styles from "./QuizContent.module.scss";

interface QuizContentProps {}

export const QuizContent = ({}: QuizContentProps) => (
  <div className={styles.quizContent}>
    <p className="textInfo">Question 2 of 10</p>
    <h2 className={styles.quizContentQuestion}>What does CSS stand for?</h2>
    <progress className={styles.quizContentProgress} max={10} value={1}>
      10%
    </progress>
  </div>
);
