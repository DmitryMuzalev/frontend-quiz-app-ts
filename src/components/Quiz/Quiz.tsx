import { Answer } from "components/Answer/Answer";
import { Button } from "components/Button/Button";
import { useContextApp } from "hook/useContextApp";

interface QuizProps {}

export const Quiz = ({}: QuizProps) => {
  const {
    currentQuestion,
    step,
    numberQuestion,
    selectedAnswer,
    isChecked,
    nextQuestion,
    checkAnswer,
  } = useContextApp();

  return (
    <>
      <div className="question">
        <p className="textInfo">{`Question ${step} of ${numberQuestion}`}</p>
        <h3>{currentQuestion?.question}</h3>
        <progress max={numberQuestion} value={step}></progress>
      </div>

      <div className="list">
        {currentQuestion?.options.map((op, i) => {
          return <Answer key={i} index={i} text={op} />;
        })}
      </div>

      {!isChecked ? (
        <Button isDisabled={!selectedAnswer} cb={checkAnswer}>
          Submit answer
        </Button>
      ) : step !== numberQuestion ? (
        <Button cb={nextQuestion}>Next question</Button>
      ) : (
        <Button cb={() => {}}>Show result</Button>
      )}
    </>
  );
};
