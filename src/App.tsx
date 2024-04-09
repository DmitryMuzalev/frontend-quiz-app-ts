import { ContextApp } from "hoc/Context";
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
//import { StartMenu } from "components/StartMenu/StartMenu";
//import { Quiz } from "components/Quiz/Quiz";
import { Result } from "components/Result/Result";

function App() {
  return (
    <ContextApp>
      <Container>
        <Header />
        {/* <StartMenu /> */}
        {/* <Quiz /> */}
        <Result />
      </Container>
    </ContextApp>
  );
}

export default App;
