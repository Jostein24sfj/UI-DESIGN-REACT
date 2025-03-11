import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {" "}
      <h1>UI-DESIGN-REACT</h1>
      <nav>
        <ul className={styles.navLinks}>
          {" "}
          <li>
            <Link to="/" className={styles.navLink}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog-preview" className={styles.navLink}>
              {" "}
              Blog Preview
            </Link>
          </li>
          <li>
            <Link to="/recipe" className={styles.navLink}>
              {" "}
              Recipe
            </Link>
          </li>
          <li>
            <Link to="/results" className={styles.navLink}>
              {" "}
              Results
            </Link>
          </li>
          <li>
            <Link to="/github" className={styles.navLink}>
              {" "}
              GitHub Profile
            </Link>
          </li>
          <li>
            <Link to="/weather" className={styles.navLink}>
              {" "}
              Weather
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
