import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle } from '../../utils/utils';
import s from './ScrollArrow.module.scss';

const ScrollArrow = ({ type }) => {
  const [isArrowShown, setIsArrowShown] = useState(false);

  useEffect(() => {
    const scrollManager = () => {
      switch (type) {
        case 'up':
          setIsArrowShown(
            window.pageYOffset > document.documentElement.clientHeight,
          );
          break;

        case 'down':
          setIsArrowShown(
            window.pageYOffset + 2 * document.documentElement.clientHeight <
              document.body.scrollHeight,
          );
          break;
        default:
      }
    };

    const throttledScrollManager = throttle(scrollManager, 500);

    window.addEventListener('scroll', throttledScrollManager);

    return () => {
      window.removeEventListener('scroll', throttledScrollManager);
    };
  }, [type]);

  const onArrowClick = () => {
    switch (type) {
      case 'up':
        window.scrollTo({
          top: 0,
          left: window.pageXOffset,
          behavior: 'smooth',
        });
        break;

      case 'down':
        window.scrollTo({
          top: document.body.scrollHeight,
          left: window.pageXOffset,
          behavior: 'smooth',
        });
        break;

      default:
        throw new Error('Unsupported scroll-arrow type');
    }
  };

  const makeArrowStyles = () => {
    switch (type) {
      case 'up':
        return s.ArrowUp;

      case 'down':
        return s.ArrowDown;

      default:
        return s.ArrowUp;
    }
  };

  return isArrowShown ? (
    <div className={makeArrowStyles()} onClick={onArrowClick}></div>
  ) : null;
};

ScrollArrow.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
};

export default ScrollArrow;
