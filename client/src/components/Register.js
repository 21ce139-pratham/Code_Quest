// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', { username, password });
            setMessage('Registration successful!'); // Show success message
            // Optionally redirect to login or contacts page
            setTimeout(() => {
                navigate('/'); // Redirect to home after a few seconds
            }, 2000);
        } catch (error) {
            setMessage('Error during registration. Please try again.'); // Show error message
            console.error('Error during registration:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {message && <p>{message}</p>} {/* Display success or error message */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
