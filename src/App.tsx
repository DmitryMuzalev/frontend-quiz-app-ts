import { Routes, Route } from "react-router-dom";

import { Container } from "components/Container/Container";
import { Layout } from "components/Layout/Layout";
import { Quiz } from "components/Quiz/Quiz";
import { StartMenu } from "components/StartMenu/StartMenu";
import { Result } from "components/Result/Result";
import { useContextApp } from "hook/useContextApp";

function App() {
  const { quizzes } = useContextApp();

  return (
    <Container>
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
    </Container>
  );
}

export default App;
