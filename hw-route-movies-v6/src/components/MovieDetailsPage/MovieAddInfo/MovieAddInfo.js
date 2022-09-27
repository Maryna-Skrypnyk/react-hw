import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import styles from './MovieAddInfo.module.scss';

const MovieAddInfo = () => {
  const location = useLocation();
  scroll.scrollToBottom();

  const navItems = [
    {
      id: '1',
      href: 'cast',
      state: {
        from: location.state ? location.state.from : '/',
      },
      text: 'Cast',
    },
    {
      id: '2',
      href: 'reviews',
      state: {
        from: location.state ? location.state.from : '/',
      },
      text: 'Reviews',
    },
  ];

  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <div className={styles.MovieAddInfo}>
      <p className={styles.AddInfo}>Additional Information</p>
      <ul className={styles.InfoList}>
        {navItems.map(({ id, href, text, state }) => (
          <li key={id} className={styles.InfoListItem}>
            <NavLink to={href} state={state} className={setActive}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr className={styles.Line} />
      <Outlet />
    </div>
  );
};

export default MovieAddInfo;
