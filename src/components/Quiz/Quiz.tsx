import { Layout } from "components/Layout/Layout";
import { Answer } from "components/Answer/Answer";
import { Button } from "components/Button/Button";
import { useContextApp } from "hook/useContextApp";

export const Quiz = () => {
  const {
    currentQuestion,
    indexQuestion,
    maxIndexQuestion,
    isChecked,
    selectAnswer,
    nextQuestion,
    checkAnswer,
  } = useContextApp();

  return (
    <Layout>
      <div className="question">
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
      )}
    </Layout>
  );
};
