import styles from "./blogPreviewCard.module.css";
import avatarImage from "./image-avatar.webp";
import illustrationImage from "./illustration-article.svg"; 

export function BlogPreviewCard() {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.topImg} src={illustrationImage} alt="" />
        <div className={styles.cardContent}>
          <h3>Learning</h3>
          <p>Published 21 Dec 2023</p>

          <h2>HTML & CSS foundations</h2>
          <p className={styles.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        <div className={styles.author}>
          <img src={avatarImage} alt="" />
          <h4>Greg Hooper</h4>
        </div>
        </div>
      </div>
    </>
  );
}
