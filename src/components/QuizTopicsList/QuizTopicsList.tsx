import { useContextApp } from "hook/useContextApp";

function QuizTopicsList() {
  const { quizzes } = useContextApp();

  return (
    <ul>
      {quizzes.map((quiz, index) => {
        return (
          <QuizTopicItem key={index} icon={quiz.icon} title={quiz.title} />
        );
      })}
    </ul>
  );
}

type QuizTopicItemProps = {
  icon: string;
  title: string;
};

function QuizTopicItem({ icon, title }: QuizTopicItemProps) {
  const { handlerSelectQuiz } = useContextApp();
  return (
    <li
      style={{ border: "1px solid red" }}
      onClick={() => handlerSelectQuiz(title)}
    >
      <img src={icon} alt={title} />
      <span>{title}</span>
    </li>
  );
}

export { QuizTopicsList };
