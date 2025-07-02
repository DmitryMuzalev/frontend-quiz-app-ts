import { Routes, Route } from "react-router-dom";

import { Layout } from "components/UI/Layout/Layout";
import { Quiz } from "components/Quiz/Quiz";
import { StartMenu } from "components/StartMenu/StartMenu";
import { Result } from "components/Result/Result";
import { useContextApp } from "hook/useContextApp";

function App() {
  const { quizzes } = useContextApp();

  return (
    <div className={"container"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartMenu />} />
          {quizzes.map((quiz, index) => {
            const quizTitle = quiz.title.toLowerCase();
            return (
              <Route key={index} path={`/${quizTitle}`} element={<Quiz />} />
            );
          })}
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
