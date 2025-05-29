import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Black's Shadows & Kirby</Link>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s',
  }
};

export default Header;
