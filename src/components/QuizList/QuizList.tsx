import { useContextApp } from "hook/useContextApp";
import styles from "./QuizList.module.scss";
import { Option } from "components/Option/Option";

interface QuizListProps {}

export const QuizList = ({}: QuizListProps) => {
  const { quizzes } = useContextApp();

  return (
    <div className={styles.quizList}>
      {quizzes.map((quiz, index) => {
        return <Option key={index} icon={quiz.icon} title={quiz.title} />;
      })}
    </div>
  );
};
