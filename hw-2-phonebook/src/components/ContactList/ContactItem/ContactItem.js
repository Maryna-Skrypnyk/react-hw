import ButtonIcon from '../../ButtonIcon';
import { Delete } from '../../Icons/Delete';

import s from './ContactItem.module.scss';

const ContactItem = ({ onDeleteContact, name, number }) => {
  return (
    <li className={s.contactItem}>
      <p className={s.contact}>
        <span className={s.contactName}>{name}:</span> {number}
      </p>
      <ButtonIcon
        onClick={onDeleteContact}
        aria-label="Delete contact"
        btnClass="btnDeleteContact"
      >
        <Delete svg={s.svgDelete} fill={s.fillDelete} />
        Delete
      </ButtonIcon>
    </li>
  );
};

export default ContactItem;
