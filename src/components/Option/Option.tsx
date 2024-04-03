import { QuizType } from "types";
import styles from "./Option.module.scss";

interface OptionProps extends Pick<QuizType, "title" | "icon"> {}

export const Option = ({ icon, title }: OptionProps) => (
  <button className={styles.option}>
    <div className={styles.optionIcon}>
      <img src={icon} alt={title} />
    </div>
    {title}
  </button>
);
