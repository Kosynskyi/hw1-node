const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const foundContact = await contacts.getContactById(id);
      console.log(foundContact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;
    case "update":
      const updatedContact = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// console.log(invokeAction({ action: "list" }));
// console.log(invokeAction({ action: "get", id: "1" }));
// console.log(
//   invokeAction({
//     action: "add",
//     name: "Junior Petrovych",
//     email: "jun@petrovych.com",
//     phone: "(123) 456-7890",
//   })
// );
console.log(invokeAction({ action: "remove", id: "10" }));

// console.log(
//   invokeAction({
//     action: "update",
//     id: "axqIYbM9GFynpXQdLbGlW",
//     name: "Junior Petrovych",
//     email: "junior@petrovych.com",
//     phone: "(123) 456-7890",
//   })
// );
