// In frontend/src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);


    
    useEffect(() => {
        const fetchContacts = async () => {
            const result = await axios.get('/api/contacts');
            setContacts(result.data);
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>{contact.name} - {contact.phone}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
