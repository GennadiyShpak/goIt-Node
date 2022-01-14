const getContacts = require("./listContacts.js");

const getContactById = async (pathToDB, contactId) => {
    const id = contactId.toString();
    const contactList = await getContacts(pathToDB);
    const contact = contactList.find((contact) => {
        return id === contact.id ? contact: null;
    });
    return contact ? contact : null;
}

module.exports = getContactById;
