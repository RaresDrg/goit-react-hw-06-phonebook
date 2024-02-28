import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles['contact-section']}>
      <h1 className={styles['section-title']}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
