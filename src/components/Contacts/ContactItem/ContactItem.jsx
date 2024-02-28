import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/actions';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <span>{contact.name.toLowerCase()}</span>: <span>{contact.number}</span>
      <button onClick={handleClick} type="button">
        X
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
