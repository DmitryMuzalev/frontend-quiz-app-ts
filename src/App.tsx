import { Menu } from "components/Menu/Menu";
import { Quiz } from "components/Quiz/Quiz";
import { Results } from "components/Results/Results";
import { Header } from "components/UI/Header/Header";

import { useContextApp } from "hook/useContextApp";

function App() {
  const { isLoading, currentScreen } = useContextApp();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <Header />
      <main>
        {currentScreen === "menu" && <Menu />}
        {currentScreen === "quiz" && <Quiz />}
        {currentScreen === "results" && <Results />}
      </main>
    </>
  );
}

export { App };
