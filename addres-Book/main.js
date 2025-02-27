let command = process.argv[2];
let argument = process.argv.slice(3);
let AddressBookController = require("./controller-db/contact-controller");
let AddressBookControllerGroupContact = require("./controller-db/groupContact-controller");
let AddressBookControllerGroups = require("./controller-db/group-controller");

switch (command) {
  case "createContact":
    AddressBookController.createContact(
      argument[0],
      argument[1],
      argument[2],
      argument[3]
    );
    break;

  case "updateContact":
    AddressBookController.updateContact(
      argument[0],
      argument[1],
      argument[2],
      argument[3],
      argument[4]
    );
    break;

  case "deleteContact":
    AddressBookController.deleteContact(argument[0]);
    break;

  case "showContact":
    AddressBookController.showContact();
    break;

  case "createGroupContact":
    AddressBookControllerGroupContact.createGroupContact(
      argument[0],
      argument[1]
    );
    break;

  case "updateGroupContact":
    AddressBookControllerGroupContact.updateGroupContact(
      argument[0],
      argument[1],
      argument[2]
    );
    break;

  case "deleteGroupContact":
    AddressBookControllerGroupContact.deleteGroupContact(argument[0]);
    break;

  case "createGroups":
    AddressBookControllerGroups.createGroups(argument[0]);
    break;

  case "updateGroups":
    AddressBookControllerGroups.updateGroups(argument[0], argument[1]);
    break;

  case "deleteGroups":
    AddressBookControllerGroups.deleteGroups(argument[0]);
    break;

  case "showGroups":
    AddressBookControllerGroups.showGroups();
    break;
}

//Case Table :

/*   +-----------------------+
     |       Contact         |
     +-----------------------+
     | id (PK)               |
     | name                  |
     | phoneNumber (UNIQUE)  |
     | company               |
     | email (UNIQUE)        |
     +-----------------------+
          |
          |
          |
          |  1
          |
          |
          v
     +-----------------------+
     |    GroupContact      |
     +-----------------------+
     | id (PK)               |
     | ContactId (FK)        |
     | GroupId (FK)          |
     +-----------------------+
          |
          |
          |
          |  N
          |
          |
          v
     +-----------------------+
     |       Groups          |
     +-----------------------+
     | id (PK)               |
     | groupName             |
     +-----------------------+ */
