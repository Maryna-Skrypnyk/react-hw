import { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from '../../utils/utils';
import s from './ScrollArrow.module.scss';

class ScrollArrow extends Component {
  state = {
    isArrowShown: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.throttledScrollManager);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledScrollManager);
  }

  onArrowClick = () => {
    switch (this.props.type) {
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
    }
  };

  scrollManager = () => {
    switch (this.props.type) {
      case 'up':
        this.setState({
          isArrowShown:
            window.pageYOffset > document.documentElement.clientHeight,
        });
        break;

      case 'down':
        this.setState({
          isArrowShown:
            window.pageYOffset + 2 * document.documentElement.clientHeight <
            document.body.scrollHeight,
        });
        break;

      default:
    }
  };

  throttledScrollManager = throttle(this.scrollManager, 500);

  makeArrowStyles = () => {
    switch (this.props.type) {
      case 'up':
        return s.ArrowUp;

      case 'down':
        return s.ArrowDown;

      default:
        return s.ArrowUp;
    }
  };

  render() {
    return this.state.isArrowShown ? (
      <div className={this.makeArrowStyles()} onClick={this.onArrowClick}></div>
    ) : null;
  }
}

export default ScrollArrow;

ScrollArrow.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
};
