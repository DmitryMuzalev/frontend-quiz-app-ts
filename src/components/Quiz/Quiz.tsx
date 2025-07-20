import s from "./Quiz.module.scss";
import { useState } from "react";
import { useContextApp } from "hook/useContextApp";

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

  return (
    <div className={s.wrapper}>
      <div className={s.questionInfo}>
        <span className={s.label}>
          {`Question ${questionIndex + 1} of ${questions.length}`}
        </span>
        <p className={s.question}>{question}</p>
        <progress max={questions.length} value={questionIndex + 1}></progress>
      </div>
      <ul className={s.answers}>
        {options.map((option, index) => (
          <li key={index} onClick={() => handlerSelectAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div className={s.button}>
        <button onClick={handlerSubmitAnswer} disabled={!currentAnswer}>
          submit answer
        </button>
      </div>
    </div>
  );
}

export { Quiz };
