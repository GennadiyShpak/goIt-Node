const path = require("path");
const argv = require('yargs').argv;


const contactList = require("./controllers/index.js");

const contactsPath = path.normalize("db/contacts.json");

console.log(contactsPath)

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            return await contactList.getContacts(contactsPath);

        case 'get':
            return await contactList.getContactById(contactsPath, id);

        case 'add':
            await contactList.addContact(contactsPath ,name, email, phone);
            return await contactList.getContacts(contactsPath);

        case 'remove':
            return await contactList.removeContact(contactsPath, id);

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

(
   async () => {
       console.table(await invokeAction(argv))
    }
)();
