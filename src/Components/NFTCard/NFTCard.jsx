import styles from "./NFTCard.module.css";
import image from "./image-equilibrium.jpg"
import avatarImage from "./image-avatar.png"

export function NFTCard() {
    return (
    <>
        <div className={styles.card}>
         <img className={styles.topImg} src={image} alt="" />
          <div className={styles.cardContent}>
            <h3>Equilibrium #3429</h3>
            <p>Our Equilibrium collection promotes balance and calm</p>

            
              <p className={styles.crypto}>0.0041 ETH</p>
            
              <p className={styles.numbers}>3 days left</p>
             

            <div className={styles.author}>
             <img src={avatarImage} alt="" />
             <h4>Creation of Jules Wyvern</h4>
            </div>
          </div>
        </div>
    </>
    );
}