import { QuizTopicsList } from "../QuizTopicsList/QuizTopicsList";

function Menu() {
  return (
    <>
      <div>
        <h2 className="greeting">
          <span>Welcome to the</span>
          <span>Frontend Quiz!</span>
        </h2>
        <p className="small-text">Pick a subject to get started.</p>
      </div>
      <QuizTopicsList />
    </>
  );
}

export { Menu };
