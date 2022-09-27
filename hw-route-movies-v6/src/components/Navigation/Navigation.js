import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const navItems = [
  { id: '1', href: '', text: 'Home', isEnd: 'end' },
  { id: '2', href: 'movies', text: 'Movies', isEnd: null },
];

const Navigation = () => {
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <div className={styles.ContainerNav}>
      <nav className={styles.Navigation}>
        <ul className={styles.NavList}>
          {navItems.map(({ href, text, isEnd }) => (
            <li key={href} className={styles.NavListItem}>
              <NavLink to={href} className={setActive} end={isEnd}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
