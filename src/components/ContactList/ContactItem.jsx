import { Button } from '../ContactForm/ContactForm.styled';
import { Name, Number, ContactItemStyled } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return  <ContactItemStyled>
                <Name>{name}: </Name>
                <Number>{number}</Number>
                <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
            </ContactItemStyled>
};


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};