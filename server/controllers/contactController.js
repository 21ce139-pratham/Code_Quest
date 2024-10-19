const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    const { name, email, phone, tags } = req.body;
    const contact = new Contact({ name, email, phone, tags, userId: req.user.id });
    await contact.save();
    res.status(201).json(contact);
};

// Additional CRUD functions (get, update, delete) would go here
