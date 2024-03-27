import styles from "./QuizList.module.scss";

interface QuizListProps {}

export const QuizList = ({}: QuizListProps) => (
  <ul className={styles.quizList}>QuizList Component</ul>
);
