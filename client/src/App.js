// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

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
                        <li>
                            <Link to="/login">Login</Link> {/* Add login link */}
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Contact Management System</h1>} />
                    <Route path="/contacts" element={<ContactList />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} /> {/* Add login route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
