import ScrollToTop from 'react-scroll-up-update';
import { ReactComponent as UpArrowIcon } from '../../images/icons/up-arrow.svg';

import s from './ScrollTop.module.scss';

const ScrollTop = () => {
  return (
    <ScrollToTop
      showUnder={30}
      style={{
        bottom: 20,
        right: 20,
      }}
      className={s.ScrollTop}
    >
      <span className={s.ContentScrollTop}>
        <UpArrowIcon width="20" height="20" fill="currentColor" />
      </span>
    </ScrollToTop>
  );
};

export default ScrollTop;
