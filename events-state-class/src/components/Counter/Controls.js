import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
