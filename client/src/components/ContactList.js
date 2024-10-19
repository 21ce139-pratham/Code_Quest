// src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/contacts/getContacts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setContacts(result.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        if (token) {
            fetchContacts();
        }
    }, [token]);

    // Redirect if not authenticated
    if (!token) {
        return <Navigate to="/login" />;
    }

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
