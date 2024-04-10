import { useContextApp } from "hook/useContextApp";
import { QuizType } from "types";

interface LabelQuizProps extends Pick<QuizType, "title" | "icon"> {}

export const LabelQuiz = ({ icon, title }: LabelQuizProps) => {
  const { selectQuiz } = useContextApp();
  return (
    <button className={"listItem"} onClick={() => selectQuiz(title)}>
      <div className="icon" id={title.toLowerCase()}>
        <img src={icon} alt={title} />
      </div>
      {title}
    </button>
  );
};
