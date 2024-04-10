import styles from "./LogoQuiz.module.scss";

interface LogoQuizProps {
  images: string;
  name: string;
}

export const LogoQuiz = ({ images, name }: LogoQuizProps) => {
  return (
    <div className={styles.logoQuiz}>
      <div className="icon" id={name.toLowerCase()}>
        <img src={images} alt={name} />
      </div>
      {name}
    </div>
  );
};
