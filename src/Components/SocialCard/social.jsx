import styles from "./social.module.css";
import image from "./avatar-jessica.jpeg";

export function SocialCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <img className={styles.image} src={image} alt="" />
          <h3>Jessica Randall</h3>
          <p className={styles.location}>London, United Kingdom</p>

          <div className={styles.info}>
            <p>"Front-end developer and avid reader."</p>
          </div>

          <div className={styles.buttons}>
            <button>Github</button>
            <button>Frondend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
          </div>
        </div>
      </div>
    </>
  );
}
