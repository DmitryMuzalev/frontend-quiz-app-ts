import styles from './Result.module.scss';
import { Button } from 'components/Button/Button';
import { LogoQuiz } from 'components/LogoQuiz/LogoQuiz';
import { useContextApp } from 'hook/useContextApp';
import { useNavigate } from 'react-router-dom';

interface ResultProps {}

export const Result = ({}: ResultProps) => {
  const { currentQuiz, score, numberQuestion, resetApp } = useContextApp();
  const navigate = useNavigate();
  const goStartMenu = () => {
    navigate('/');
    resetApp();
  };

  return (
    <>
      <h2>
        <span>Quiz completed</span>
        <span>Your scored...</span>
      </h2>
      <div className={styles.result}>
        {currentQuiz ? (
          <LogoQuiz images={currentQuiz.icon} name={currentQuiz.title} />
        ) : (
          <div></div>
        )}
        <div className={styles.resultScore}>{score}</div>
        <p className="textInfo">{`out of ${numberQuestion}`}</p>
      </div>
      <Button cb={goStartMenu}>Play again</Button>
    </>
  );
};
