import { SelectQuiz } from 'components/SelectQuiz/SelectQuiz';

interface StartMenuProps {}

export const StartMenu = ({}: StartMenuProps) => {
  return (
    <>
      <div className="greeting">
        <h2>
          <span>Welcome to the</span>
          <span>Frontend Quiz!</span>
        </h2>
        <p className="textInfo">Pick a subject to get started.</p>
      </div>
      <SelectQuiz />
    </>
  );
};
