// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/register" element={<Register />} />
                {/* Define other routes */}
            </Routes>
        </Router>
    );
};

export default App;
