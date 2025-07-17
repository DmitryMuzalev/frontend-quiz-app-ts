import { QuizTopicsList } from "../QuizTopicsList/QuizTopicsList";

function Menu() {
  return (
    <>
      <div className="greeting">
        <h2>
          <span>Welcome to the</span>
          <span>Frontend Quiz!</span>
        </h2>
        <p className="textInfo">Pick a subject to get started.</p>
      </div>
      <QuizTopicsList />
    </>
  );
}

export { Menu };
