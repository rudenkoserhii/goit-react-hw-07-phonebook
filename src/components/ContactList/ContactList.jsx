import { ContactListStyled } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';


export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);

const { data: contacts, error, isLoading } = useGetMaterialsQuery();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

    return (<ContactListStyled>
        { visibleContacts.map(({ id, name, number }) => <ContactItem key={id} name={name} number={number} id={id}/>)}
            </ContactListStyled>
)};
