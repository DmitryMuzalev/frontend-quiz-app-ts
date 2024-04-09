import styles from "./Question.module.scss";

interface QuestionProps {}

export const Question = ({}: QuestionProps) => (
  <div className={styles.question}>
    <p className="textInfo">Question 2 of 10</p>
    <h3>What does CSS stand for?</h3>
    <progress max={10} value={1}></progress>
  </div>
);
