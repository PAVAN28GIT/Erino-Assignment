import Contact from '../models/contactModel.js';

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if(contacts.length === 0) {
          return res.status(404).json({ message: 'No contacts found' });
        }
        res.status(200).json(contacts);
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving contacts' });
      }
}

export const addContact = async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    try {
        const contact = await contact.findOne({ email });
        if (contact) {
          return res.status(400).json({ message: 'Contact already exists' });
        }
        const newContact = new Contact({
          firstName,
          lastName,
          email,
          phoneNumber,
          company,
          jobTitle
        });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
      } catch (error) {
        res.status(500).json({ message: 'Error adding contact' });
      }

}

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.email = email;
        contact.phoneNumber = phoneNumber;
        contact.company = company;
        contact.jobTitle = jobTitle;
        const updatedContact = await contact.save();
        res.status(200).json(updatedContact);
      } catch (error) {
        res.status(500).json({ message: 'Error updating contact' });
      }
}

export const deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        await contact.remove();
        res.status(200).json({ message: 'Contact deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting contact' });
      }
}