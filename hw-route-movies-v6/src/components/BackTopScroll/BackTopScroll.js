import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as ArrowUp } from '../../assets/images/upArrow.svg';
import styles from './BackTopScroll.module.scss';

const BackTopScroll = () => {
  return (
    <>
      <div />
      <ScrollToTop
        className={styles.ScrollToUp}
        component={<ArrowUp className={styles.iconArrow} />}
        smooth
      />
    </>
  );
};

export default BackTopScroll;
