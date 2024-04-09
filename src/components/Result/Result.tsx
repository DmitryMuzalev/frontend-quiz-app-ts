import { Layout } from "components/Layout/Layout";
import styles from "./Result.module.scss";
import { Button } from "components/Button/Button";

interface ResultProps {}

export const Result = ({}: ResultProps) => (
  <Layout>
    <h2>
      <span>Quiz completed</span>
      <span>Your scored...</span>
    </h2>
    <div className={styles.result}>
      <div className="logoQuiz">logoQuiz</div>
      <div className={styles.resultScore}>6</div>
      <p className="textInfo"> out of 10</p>
    </div>
    <Button>Play again</Button>
  </Layout>
);
