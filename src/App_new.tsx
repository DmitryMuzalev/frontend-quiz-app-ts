import { useEffect, useState } from "react";

export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      if (!response.ok) {
        throw Error(
          `Failed to load quizzes. HTTP error! status: ${response.status}`
        );
      } else {
        setIsLoading(false);
        const data = (await response.json()) as { quizzes: Quiz[] };
        setQuizzes(data.quizzes);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    //TODO: Show preloader
    return null;
  }

  return (
    <div>
      <h2>This App New</h2>
      <p>{quizzes.length}</p>
    </div>
  );
}

export default App;
