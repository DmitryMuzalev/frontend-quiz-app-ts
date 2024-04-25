import { Answer } from "components/Answer/Answer";
import { Button } from "components/Button/Button";
import { useContextApp } from "hook/useContextApp";
import { useState } from "react";

interface QuizProps {}

export const Quiz = ({}: QuizProps) => {
  const { currentQuiz } = useContextApp();
  const questions = currentQuiz ? currentQuiz.questions : [];

  const [step, setStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    setStep((prevStep) => ++prevStep);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  return (
    <>
      <div className="question">
        <p className="textInfo">{`Question ${step + 1} of ${
          questions.length
        }`}</p>
        <h3>{questions[step]?.question}</h3>
        <progress max={questions.length} value={step + 1}></progress>
      </div>
      <div className="list">
        {questions[step]?.options.map((op, i) => {
          return (
            <Answer
              key={i}
              index={i}
              text={op}
              cb={selectAnswer}
              isSelected={op === selectedAnswer}
              isCorrect={op === questions[step]?.answer}
              isChecked={isChecked}
            />
          );
        })}
      </div>
      {!isChecked ? (
        <Button
          isDisabled={!selectedAnswer}
          cb={() => {
            setIsChecked(true);
          }}
        >
          Submit answer
        </Button>
      ) : (
        <Button cb={nextQuestion}>Next question</Button>
      )}
    </>
  );
};
