import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { ContextApp } from "hoc/Context";

function App() {
  return (
    <ContextApp>
      <Container>
        <Header />
      </Container>
    </ContextApp>
  );
}

export default App;
