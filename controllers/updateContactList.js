const fs = require("fs/promises");
const short = require('short-uuid');

const getContacts = require("./listContacts.js");

const addContact = async (pathToDB, name, email, phone) => {
    const contactList = await getContacts(pathToDB),
        contactName = name.toString(),
        contactEmail = email.toString(),
        contactPhone = phone.toString(),
        newContact = {
            id: short.generate(),
            name: contactName,
            email: contactEmail,
            phone: contactPhone
        }

    contactList.push(newContact);
    await fs.writeFile(pathToDB, JSON.stringify(contactList));

    return newContact;
}

module.exports = addContact;
