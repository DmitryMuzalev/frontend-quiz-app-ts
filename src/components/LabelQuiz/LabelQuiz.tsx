import { QuizType } from "types";

interface LabelQuizProps extends Pick<QuizType, "title" | "icon"> {}

export const LabelQuiz = ({ icon, title }: LabelQuizProps) => (
  <button className={"listItem"}>
    <div className="icon" id={title.toLowerCase()}>
      <img src={icon} alt={title} />
    </div>
    {title}
  </button>
);
