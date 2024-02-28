import PropTypes from 'prop-types';
import styles from './SubmitBtn.module.css';

const SubmitBtn = ({ text }) => {
  return (
    <button className={styles.submitBtn} type="submit">
      {text}
    </button>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitBtn;
