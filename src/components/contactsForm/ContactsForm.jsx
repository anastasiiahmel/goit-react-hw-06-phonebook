

import { addContact } from "redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";

import { FormStyle } from "./FormStyle.styled"; 
// import { useState } from 'react';


export const Form = () => {
   

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);


    const onFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;

        if (contacts.some(
            contact => 
            contact.number === number || 
            contact.name.toLowerCase() === name.toLowerCase())){
              alert(`${name} or entered ${number} number is already in contacts.`);
              return;
            }

        event.target.reset();
        dispatch(addContact({id: nanoid(), name, number}))
    }; 


    return (
        <FormStyle>
            <form onSubmit={onFormSubmit} className="form">
                <label className='label' htmlFor='name'>
                    <span className="input-title">Name</span>
                    <input className="input"
                        type="text"
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Rosie Simpson'
                        id='name'

                    />
                </label>
                <label htmlFor='number' className='label'>
                    <span className="input-title">Number</span>
                    <input className="input"
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='459-12-56'
                         id='number'

                    />
                </label>
                <button
                    className="btn"
                    type='submit'
                    disabled={contacts.name === '' && contacts.number === ''}
                >Add Contact
                </button>
            </form>
        </FormStyle>
    );
};