import { lazy, Suspense } from 'react';

import {
  NavLink,
  useMatch,
  Route,
  useLocation,
  Routes,
} from 'react-router-dom';

import LoaderSpinner from '../../LoaderSpinner';
import { animateScroll as scroll } from 'react-scroll';

import styles from './MovieAddInfo.module.scss';

const CastView = lazy(() =>
  import('../../../views/CastView.js' /* webpackChunkName: "cast-view" */),
);

const ReviewsView = lazy(() =>
  import('../../../views/ReviewsView' /* webpackChunkName: "reviews-view" */),
);

export default function MovieAddInfo() {
  const { url, path } = useMatch();
  const location = useLocation();

  scroll.scrollToBottom();

  const navItems = [
    {
      id: '1',
      href: {
        pathname: `${url}/cast`,
        state: {
          from: location.state ? location.state.from : '/',
        },
      },
      text: 'Cast',
    },
    {
      id: '2',
      href: {
        pathname: `${url}/reviews`,
        state: {
          from: location.state ? location.state.from : '/',
        },
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
        {navItems.map(({ href, text }) => (
          <li key={text} className={styles.InfoListItem}>
            <NavLink to={href} className={setActive}>
              {text}
            </NavLink>
          </li>
        ))}

        {/* <li className={styles.InfoListItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.InfoListItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li> */}
      </ul>

      <hr className={styles.Line} />

      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path={`${path}/cast`}>
            <CastView />
          </Route>

          <Route path={`${path}/reviews`}>
            <ReviewsView />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
