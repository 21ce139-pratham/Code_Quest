// src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from local storage or wherever you store it
                const result = await axios.get('http://localhost:5000/api/contacts/getContacts', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in Authorization header
                    },
                });
                setContacts(result.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        {contact.name} - {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
