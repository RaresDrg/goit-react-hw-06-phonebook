import styles from './Phonebook.module.css';

import NameInput from './NameInput/NameInput';
import NumberInput from './NumberInput/NumberInput';
import SubmitBtn from './SubmitBtn/SubmitBtn';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const checkExistence = contacts.find(item => {
      return item.name.toUpperCase() === name.toUpperCase();
    });

    checkExistence
      ? alert(`"${name}" is already in contacts`)
      : dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <NameInput />
        <NumberInput />
        <SubmitBtn text="Add contact" />
      </form>
    </div>
  );
};

export default Phonebook;
