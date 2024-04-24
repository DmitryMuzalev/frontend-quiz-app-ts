import { useContextApp } from "hook/useContextApp";
import { LabelQuiz } from "components/LabelQuiz/LabelQuiz";

export const SelectQuiz = () => {
  const { quizzes } = useContextApp();
  return (
    <div className="list">
      {quizzes.map((quiz, index) => {
        return <LabelQuiz key={index} icon={quiz.icon} title={quiz.title} />;
      })}
    </div>
  );
};
