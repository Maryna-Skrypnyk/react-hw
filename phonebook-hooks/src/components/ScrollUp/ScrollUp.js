import ScrollToTop from 'react-scroll-up-update';
import { ReactComponent as UpArrowIcon } from '../../images/icons/up-arrow.svg';

import s from './ScrollUp.module.scss';

const ScrollUp = () => {
  return (
    <ScrollToTop
      showUnder={30}
      style={{
        bottom: 20,
        right: 20,
        width: 40,
        height: 40,
      }}
    >
      <span className={s.ContentScrollUp}>
        <UpArrowIcon width="20" height="20" fill="currentColor" />
      </span>
    </ScrollToTop>
  );
};

export default ScrollUp;
