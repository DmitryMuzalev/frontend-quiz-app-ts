import { Layout } from "components/Layout/Layout";
import { Question } from "components/Question/Question";
import { Answer } from "components/Answer/Answer";
import { Button } from "components/Button/Button";

export const Quiz = () => (
  <Layout>
    <Question />
    <div className="list">
      <Answer index={0} text="Abc" />
      <Answer index={1} text="Abc" />
      <Answer index={2} text="Abc" />
      <Answer index={3} text="Abc" />
    </div>
    <Button>Submit answer</Button>
  </Layout>
);
