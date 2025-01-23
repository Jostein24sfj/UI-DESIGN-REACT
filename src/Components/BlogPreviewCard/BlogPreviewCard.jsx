import styles from "./blogPreviewCard.module.css";
import avatarImage from "./image-avatar.webp";
import illustrationImage from "./illustration-article.svg"; // add desktop image instead

export function BlogPreviewCard() {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.topImg} src={illustrationImage} alt="" />
        <div className={styles.cardContent}>
          <h3>Learning</h3>
          {/* endre teksten under så den er lik designet:  */}
          <p>Produsert 23.01.2025</p>

          <h2>HTML & CSS foundation</h2>
          {/* fiks className så du henter fra styles variablene (samme som de andre classNamene det har blitt gjort på) */}
          <p className="description">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        <div className={styles.author}>
          <img src={avatarImage} alt="" />
          <h4>Greg Hopper</h4>
        </div>
        </div>
      </div>
    </>
  );
}
