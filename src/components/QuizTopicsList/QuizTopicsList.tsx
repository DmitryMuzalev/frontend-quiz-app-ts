import { Icon } from "components/UI/Icon/Icon";
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
    <li onClick={() => handlerSelectQuiz(title)} className="badge">
      <Icon icon={icon} name={title} />
      <span>{title}</span>
    </li>
  );
}

export { QuizTopicsList };
