import { LabelQuiz } from "components/LabelQuiz/LabelQuiz";
import { useContextApp } from "hook/useContextApp";

export const StartMenu = () => {
  const { quizzes } = useContextApp();
  return (
    <>
      <div className="greeting">
        <h2>
          <span>Welcome to the</span>
          <span>Frontend Quiz!</span>
        </h2>
        <p className="textInfo">Pick a subject to get started.</p>
      </div>
      <div className="list">
        {quizzes.map((quiz, index) => {
          return <LabelQuiz key={index} icon={quiz.icon} title={quiz.title} />;
        })}
      </div>
    </>
  );
};
