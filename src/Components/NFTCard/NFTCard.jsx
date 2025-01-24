import styles from "./NFTCard.module.css";
import image from "./image-equilibrium.jpg";
import avatarImage from "./image-avatar.png";
import { IconClock } from "./icon-clock";
import { IconEth } from "./icon-eth";

export function NFTCard() {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.topImg} src={image} alt="" />
        <div className={styles.cardContent}>
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm.</p>

          <div className={styles.price}>
            <p className={styles.crypto}>
              <IconEth />
              0.041 ETH
            </p>
            <p className={styles.numbers}>
              {" "}
              <IconClock />3 days left
            </p>
          </div>

          <div className={styles.author}>
            <img src={avatarImage} alt="" />
            <h4>
              Creation of <span>Jules Wyvern</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
