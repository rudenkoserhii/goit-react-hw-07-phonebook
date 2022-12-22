import { Label, Input } from '../ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () =>{
    const dispatch = useDispatch();

        const filterId = nanoid();
        return <Label htmlFor={filterId}>Find contacts by name
                <Input type="text" id={filterId} name="filter" onChange={(e) => {dispatch(addFilter(e.currentTarget.value))}}/>
                </Label>
}


