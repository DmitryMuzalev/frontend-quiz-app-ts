import { useContextApp } from "hook/useContextApp";
import { Link } from "react-router-dom";

type Props = {
  icon: string;
  title: string;
};

export const LabelQuiz = ({ icon, title }: Props) => {
  const { selectQuiz, resetApp } = useContextApp();
  return (
    <Link
      to={`/${title.toLowerCase()}`}
      className={"listItem"}
      onClick={() => {
        resetApp();
        selectQuiz(title);
      }}
    >
      <div className="icon" id={title.toLowerCase()}>
        <img src={icon} alt={title} />
      </div>
      {title}
    </Link>
  );
};
