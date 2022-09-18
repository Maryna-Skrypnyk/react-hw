import { NavLink } from 'react-router-dom';
import withLocalization from '../hoc/withLocalization';
import s from './Navigation.module.scss';

const Navigation = ({ localization }) => {
  const { menuHome, menuContacts } = localization.localizedContent;
  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? s.navLinkActive : s.navLink;
            }}
          >
            {menuHome}
          </NavLink>
        </li>

        {/* {isLoggedIn && ( */}
        <li className={s.navListItem}>
          <NavLink
            to="/contacts"
            className={({ isActive }) => {
              return isActive ? s.navLinkActive : s.navLink;
            }}
          >
            {menuContacts}
          </NavLink>
        </li>
        {/* )} */}
      </ul>
    </nav>
  );
};

export default withLocalization(Navigation);
