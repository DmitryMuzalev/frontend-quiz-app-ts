import { Box } from "components/UI/Box/Box";
import { Button } from "components/UI/Button/Button";
import { useContextApp } from "hook/useContextApp";
import { useState } from "react";
import s from "./Quiz.module.scss";

function Quiz() {
  const { currentQuiz, incrementScore, handleShowResults } = useContextApp();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);

  if (!currentQuiz) return <div>Quiz not selected</div>;

  const { questions } = currentQuiz;
  const currentQuestion = questions[questionIndex];

  const { answer, options, question } = currentQuestion;

  const handlerSubmitAnswer = () => {
    if (answer === currentAnswer) {
      incrementScore();
    }
    if (questionIndex + 1 >= questions.length) {
      handleShowResults();
    } else {
      setQuestionIndex((prev) => prev + 1);
      setCurrentAnswer(null);
    }
  };

  const handlerSelectAnswer = (value: string) => setCurrentAnswer(value);

  const variants = ["A", "B", "C", "D"];

  return (
    <>
      <div className={s.questionInfo}>
        <span className={"textInfo"}>
          {`Question ${questionIndex + 1} of ${questions.length}`}
        </span>
        <p className={s.question}>{question}</p>
        <progress max={questions.length} value={questionIndex + 1}></progress>
      </div>
      <ul className={s.answers}>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="badge"
              onClick={() => handlerSelectAnswer(option)}
            >
              <Box>{variants[index]}</Box>
              <span>{option}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className={s.button}>
        <Button onClick={handlerSubmitAnswer} disabled={!currentAnswer}>
          Submit answer
        </Button>
      </div>
    </>
  );
}

export { Quiz };
