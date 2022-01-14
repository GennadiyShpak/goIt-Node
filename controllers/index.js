const getContacts = require("./listContacts.js");
const getContactById = require("./findContact.js");
const removeContact = require("./removeContact.js");
const addContact = require("./updateContactList.js");

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact
}
