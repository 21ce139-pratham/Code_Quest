const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    const { name, email, phone, tags } = req.body;
    const contact = new Contact({ name, email, phone, tags, userId: req.user.id });
    await contact.save();
    res.status(201).json(contact);
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ userId: req.user.id }); // Filter by user ID
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Additional CRUD functions (get, update, delete) would go here
