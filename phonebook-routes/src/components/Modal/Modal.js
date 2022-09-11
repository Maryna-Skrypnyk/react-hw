import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      className={s.ModalBackdrop}
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={s.ModalContent}
        initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        animate={{ scale: 1 }}
      >
        {children}
      </motion.div>
    </motion.div>,
    modalRoot,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
