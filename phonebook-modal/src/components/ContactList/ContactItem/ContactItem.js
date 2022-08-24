import ButtonIcon from '../../ButtonIcon';
// import { Delete } from '../../Icons/Delete';
import { ReactComponent as DeleteIcon } from '../../../images/icons/delete2.svg';

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
        <DeleteIcon width="30" height="30" />
        {/* <Delete svg={s.svgDelete} fill={s.fillDelete} /> */}
      </ButtonIcon>
    </li>
  );
};

export default ContactItem;
