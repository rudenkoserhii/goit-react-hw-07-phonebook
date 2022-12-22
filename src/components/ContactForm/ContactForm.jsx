import { ContactFormStyled, Button, Label, Input } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);


    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');
    

    const handlerChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
        case 'name': setName(value);
        break;

        case 'number': setNumber(value);
        break;

        default:
        break;}
    }

    const handlerSubmit = e => {
        e.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
        Notiflix.Notify.warning(`${name}is already in contacts`);
        return}

        dispatch(addContact({ 'id': nanoid(), 'name': name, 'number': number }));
        e.target.reset();

    };


    const nameId = nanoid();
    const numberId = nanoid();
    return (
        <ContactFormStyled onSubmit={handlerSubmit} id="form">
            <Label htmlFor={nameId}>Name
                <Input
                type="text"
                id={nameId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handlerChange}/>
            </Label>
            <Label htmlFor={numberId}>Number
                <Input
                type="tel"
                id={numberId}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handlerChange}/>
            </Label>
            <Button type="submit">Add contact</Button>
        </ContactFormStyled>
)};


