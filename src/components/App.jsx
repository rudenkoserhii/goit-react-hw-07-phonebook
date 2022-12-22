import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, H1, H2} from './Styled/Styled';


export const App = () => {

  return (
    <Wrapper>
      <H1>Phonebook</H1>
      <ContactForm></ContactForm>
      <H2>Contacts</H2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Wrapper>
  )
}
