import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { StartMenu } from "components/StartMenu/StartMenu";
import { Quiz } from "components/Quiz/Quiz";
import { Result } from "components/Result/Result";
import { useContextApp } from "hook/useContextApp";

function App() {
  const { currentQuiz } = useContextApp();
  return (
    <Container>
      <Header />
      {currentQuiz ? <Quiz /> : <StartMenu />}
      {/* <Result /> */}
    </Container>
  );
}

export default App;
