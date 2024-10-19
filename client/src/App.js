// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import Register from './components/Register';
import './App.css'; // Import your CSS file for styling

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Contact Management System</h1>} />
                    <Route path="/contacts" element={<ContactList />} />
                    <Route path="/register" element={<Register />} />
                    {/* Define other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
