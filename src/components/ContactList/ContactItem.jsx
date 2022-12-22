import { Button } from '../ContactForm/ContactForm.styled';
import { Name, Number, ContactItemStyled } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, phone }) => {

    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    return  <ContactItemStyled>
                <Name>{name}: </Name>
                <Number>{phone}</Number>
                <Button onClick={() => deleteContact(id)} disabled={isLoading}>Delete</Button>
            </ContactItemStyled>
};


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};