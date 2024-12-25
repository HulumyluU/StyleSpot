import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={styles.logo}
          >
            StyleSpot
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link 
                to="/" 
                className={styles.navLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={styles.navLink}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={styles.navLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
