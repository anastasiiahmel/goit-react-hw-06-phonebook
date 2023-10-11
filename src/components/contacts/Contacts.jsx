import { useSelector, useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactsList } from '../contactsList/ContactsList';

import { deleteContact } from "redux/contactSlice";


export const Contacts = () => {

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);


    const filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        );
    });
  

    const onDeleteContact = contactId  => {
        dispatch(deleteContact(contactId));
    };

    

    return (
        <>
            {contacts.length === 0 ? (
                Notify.success('There are no contatcs in your list, sorry')
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={filteredContacts}
                onDeleteContact={onDeleteContact}
            />
            ) : (
            Notify.failure('No contacts found that match the filter')
            )}
        </>
    );
};