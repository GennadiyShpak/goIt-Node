const fs = require("fs/promises");

const getContacts = require("./listContacts.js");

const removeContact = async (pathToDB, contactId) => {
    const id = contactId.toString();
    const contactList = await getContacts(pathToDB);
    const filtredList = contactList.filter(contact => contact.id !== id);
    await fs.writeFile(pathToDB, JSON.stringify(filtredList));
    return filtredList;
}

module.exports = removeContact;
