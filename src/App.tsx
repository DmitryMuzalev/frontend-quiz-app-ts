import { Menu } from "components/Menu/Menu";
import { QuizNew } from "components/QuizNew/QuizNew";
import { Results } from "components/Results/Results";
import { Layout } from "components/UI/Layout/Layout";

import { useContextApp } from "hook/useContextApp";

function App() {
  const { isLoading, currentScreen } = useContextApp();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <Layout>
      {currentScreen === "menu" && <Menu />}
      {currentScreen === "quiz" && <QuizNew />}
      {currentScreen === "results" && <Results />}
    </Layout>
  );
}

export { App };
