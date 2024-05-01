import { useContextApp } from 'hook/useContextApp';
import { Link } from 'react-router-dom';
import { QuizType } from 'types';

interface LabelQuizProps extends Pick<QuizType, 'title' | 'icon'> {}

export const LabelQuiz = ({ icon, title }: LabelQuizProps) => {
  const { selectQuiz, resetApp } = useContextApp();
  return (
    <Link
      to={`/${title.toLowerCase()}`}
      className={'listItem'}
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
