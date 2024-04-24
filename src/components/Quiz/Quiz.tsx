import { useContextApp } from "hook/useContextApp";

interface QuizProps {}

export const Quiz = ({}: QuizProps) => {
  const { currentQuiz } = useContextApp();
  return <></>;
};

{
  /*    <div className="question">
        <p className="textInfo">{`Question ${indexQuestion} of ${maxIndexQuestion}`}</p>
        <h3>{currentQuestion?.question}</h3>
        <progress max={maxIndexQuestion} value={indexQuestion}></progress>
      </div>
      <div className="list">
        {currentQuestion?.options.map((op, i) => {
          return <Answer key={i} index={i} text={op} cb={selectAnswer} />;
        })}
      </div>
      {!isChecked ? (
        <Button cb={checkAnswer}>Submit answer</Button>
      ) : (
        <Button cb={nextQuestion}>Next question</Button>
      )} */
}
