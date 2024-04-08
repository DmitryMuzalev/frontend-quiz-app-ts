import { ChoicesAnswers } from "components/ChoicesAnswers/ChoicesAnswers";
import { Container } from "components/Container/Container";
//import { Greeting } from "components/Greeting/Greeting";
import { Header } from "components/Header/Header";
import { Layout } from "components/Layout/Layout";
import { QuizContent } from "components/QuizContent/QuizContent";
//import { QuizList } from "components/QuizList/QuizList";
import { ContextApp } from "hoc/Context";

function App() {
  return (
    <ContextApp>
      <Container>
        <Header />
        <Layout>
          {/* 
          <Greeting />
          <QuizList /> 
          */}
          <QuizContent />
          <ChoicesAnswers />
        </Layout>
      </Container>
    </ContextApp>
  );
}

export default App;
