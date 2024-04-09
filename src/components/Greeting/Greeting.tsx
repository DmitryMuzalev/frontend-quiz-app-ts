import styles from "./Greeting.module.scss";

export const Greeting = () => (
  <div className={styles.greeting}>
    <h2>
      <span>Welcome to the</span>
      <span>Frontend Quiz!</span>
    </h2>
    <p className="textInfo">Pick a subject to get started.</p>
  </div>
);
