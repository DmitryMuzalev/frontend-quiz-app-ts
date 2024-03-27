import { Container } from "components/Container/Container";
import { Greeting } from "components/Greeting/Greeting";
import { Header } from "components/Header/Header";
import { Layout } from "components/Layout/Layout";
import { QuizList } from "components/QuizList/QuizList";
import { ContextApp } from "hoc/Context";

function App() {
  return (
    <ContextApp>
      <Container>
        <Header />
        <Layout>
          <Greeting />
          <QuizList />
        </Layout>
      </Container>
    </ContextApp>
  );
}

export default App;
