import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/actions';
import debounce from 'debounce';

const FilterContactsInput = () => {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <>
      <label htmlFor="filterInputId">Find contacts by name</label>
      <input
        onChange={debounce(handleInputChange, 500)}
        type="text"
        name="filter"
        id="filterInputId"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

export default FilterContactsInput;
