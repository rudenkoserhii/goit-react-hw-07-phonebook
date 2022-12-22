import { ContactListStyled } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';


export const ContactList = () => {
    const filter = useSelector(state => state.filter.filter);

    const { data: contacts, error, isLoading } = useGetContactsQuery();
console.log(contacts)
console.log(filter)
    // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

    return (
        <ContactListStyled>
            {error && <p>Ups... Something going wrong! Please, refresh page and try again!</p>}
            {isLoading && <b>Loading...</b>}
            {contacts && contacts
                .filter(contact => contact.name.toLowerCase().includes(filter))
                .map(({ id, name, phone }) => <ContactItem key={id} name={name} phone={phone} id={id}/>)}
        </ContactListStyled>
)};
