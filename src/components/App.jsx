import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import '../index.css';

const App = () => {
  return (
    <>
      <Section title="This is my Contact Book">
        <Phonebook />
        <Contacts />
      </Section>
    </>
  );
};

export default App;
