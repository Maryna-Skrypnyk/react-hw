import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const navItems = [
  { id: '1', href: '/', text: 'Home' },
  { id: '2', href: '/movies', text: 'Movies' },
];

const Navigation = () => {
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <div className={styles.ContainerNav}>
      <nav className={styles.Navigation}>
        <ul className={styles.NavList}>
          {navItems.map(({ href, text }) => (
            <li key={text} className={styles.NavListItem}>
              <NavLink to={href} className={setActive}>
                {text}
              </NavLink>
            </li>
          ))}
          {/* <li className={styles.NavListItem}>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li className={styles.NavListItem}>
            <NavLink to="/movies" className={setActive}>
              Movies
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
