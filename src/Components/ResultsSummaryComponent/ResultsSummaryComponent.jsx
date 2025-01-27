import React from "react";
import styles from "./ResultsSummaryComponent.module.css";
import reactionIcon from "./icon-reaction.svg";
import memoryIcon from "./icon-memory.svg";
import verbalIcon from "./icon-verbal.svg";
import visualIcon from "./icon-visual.svg";

export function ResultsSummaryComponent() {
  return (
    <main className={styles.mainPage}>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <h1 className={styles.resultsSummaryTitle}>Your Result</h1>
          <div className={styles.circleBox}>
            <h2 className={styles.circleHeader}>76</h2>
            <p className={styles.circleText}>of 100</p>
          </div>
          <div className={styles.cardLeftBottom}>
            <p className={styles.cardLeftText}>Great</p>
            <p className={styles.cardLeftParagraph}>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className={styles.cardRight}>
          <div className={styles.cardRightHeaderBox}>
            <h2 className={styles.cardRightHeader}>Summary</h2>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.statsBox1}>
              <div className={styles.statsLeft}>
                <img
                  className={styles.statsImage}
                  src={reactionIcon}
                  alt="reaction icon"
                />
                <p className={styles.statsTitle}>Reaction</p>
              </div>
              <div className={styles.statsRight}>
                <p className={styles.statsResults}>
                  80 <span className={styles.statsSpan}>/ 100</span>
                </p>
              </div>
            </div>
            <div className={styles.statsBox2}>
              <div className={styles.statsLeft}>
                <img
                  className={styles.statsImage}
                  src={memoryIcon}
                  alt="memory icon"
                />
                <p className={styles.statsTitle2}>Memory</p>
              </div>
              <div className={styles.statsRight}>
                <p className={styles.statsResults}>
                  92 <span className={styles.statsSpan}>/ 100</span>
                </p>
              </div>
            </div>
            <div className={styles.statsBox3}>
              <div className={styles.statsLeft}>
                <img
                  className={styles.statsImage}
                  src={verbalIcon}
                  alt="verbal icon"
                />
                <p className={styles.statsTitle3}>Verbal</p>
              </div>
              <div className={styles.statsRight}>
                <p className={styles.statsResults}>
                  61 <span className={styles.statsSpan}>/ 100</span>
                </p>
              </div>
            </div>
            <div className={styles.statsBox4}>
              <div className={styles.statsLeft}>
                <img
                  className={styles.statsImage}
                  src={visualIcon}
                  alt="visual icon"
                />
                <p className={styles.statsTitle4}>Visual</p>
              </div>
              <div className={styles.statsRight}>
                <p className={styles.statsResults}>
                  72 <span className={styles.statsSpan}>/ 100</span>
                </p>
              </div>
            </div>
          </div>
          <button className={styles.button}>Continue</button>
        </div>
      </div>
    </main>
  );
}
