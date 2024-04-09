import { Layout } from "components/Layout/Layout";
import { Greeting } from "components/Greeting/Greeting";
import { SelectQuiz } from "components/SelectQuiz/SelectQuiz";

interface StartMenuProps {}

export const StartMenu = ({}: StartMenuProps) => (
  <Layout>
    <Greeting />
    <SelectQuiz />
  </Layout>
);
