import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ contacts }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
