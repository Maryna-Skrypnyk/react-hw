import ButtonIcon from '../../ButtonIcon';
// import { Delete } from '../../Icons/Delete';
import { motion } from 'framer-motion';
import { ReactComponent as DeleteIcon } from '../../../images/icons/delete2.svg';

import s from './ContactItem.module.scss';

const ContactItem = ({ onDeleteContact, name, number }) => {
  return (
    <motion.li
      className={s.contactItem}
      initial={{ opacity: 0 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
    >
      <p className={s.contact}>
        <span className={s.contactName}>{name}:</span> {number}
      </p>
      <ButtonIcon
        onClick={onDeleteContact}
        aria-label="Delete contact"
        btnClass="btnDeleteContact"
      >
        <DeleteIcon width="30" height="30" className={s.iconDelete} />
        {/* <Delete svg={s.svgDelete} fill={s.fillDelete} /> */}
      </ButtonIcon>
    </motion.li>
  );
};

export default ContactItem;
