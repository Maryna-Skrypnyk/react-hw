import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.ModalBackdrop} onClick={handleBackdropClick}>
      <div className={s.ModalContent}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
