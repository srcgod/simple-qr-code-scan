import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>QR App</div> 
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/generate" className={styles.navLink}>Generate</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/scan" className={styles.navLink}>Scan</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/scanHistory" className={styles.navLink}>Scan history</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/generateHistory" className={styles.navLink}>Generate history</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};