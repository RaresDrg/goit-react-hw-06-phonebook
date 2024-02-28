import styles from './Contacts.module.css';
import FilterContactsInput from './FilterContactsInput/FilterContactsInput';
import ContactsList from './ContactsList/ContactsList';
import AbsentContactsNotification from './AbsentContactsNotification/AbsentContactsNotification';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(item =>
    item.name.toUpperCase().includes(filter.toUpperCase())
  );
};

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsFiltered = getFilteredContacts(contacts, filter);

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>

      <FilterContactsInput />

      {contactsFiltered.length > 0 ? (
        <ContactsList contacts={contactsFiltered} />
      ) : (
        <AbsentContactsNotification />
      )}
    </div>
  );
};

export default Contacts;
