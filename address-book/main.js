let command = process.argv[2];
let argument = process.argv.slice(3);

// contacts
const ContactController = require("./controller/contact");
const GroupsController = require("./controller/groups");
const GroupContactController = require("./controller/group-contact");

/*
    ====================
    ADDRESS BOOK COMMAND
    ====================

    > node main.js create-contact <name> <phoneNumber> <company> <email>
    > node main.js update-contact <id> <name> <phoneNumber> <company> <email>
    > node main.js delete-contact <id>
    > node main.js show-contact
    > node main.js create-groups <groupName>
    > node main.js update-groups <id> <groupName>
    > node main.js delete-groups <id>
    > node main.js show-groups
    > node main.js create-contact_groups <contactId> <groupId>
    > node main.js update-contact_groups <id> <contactId> <groupId>
    > node main.js delete-contact-groups <id> 
    > node main.js help
*/

// generate by chatGPT
function showHelp() {
    console.log("command list:");
    console.log("> node main.js create-contact <name> <phoneNumber> <company> <email>");
    console.log("> node main.js update-contact <id> <name> <phoneNumber> <company> <email>");
    console.log("> node main.js delete-contact <id>");
    console.log("> node main.js show-contact");
    console.log("> node main.js create-groups <groupName>");
    console.log("> node main.js update-groups <id> <groupName>");
    console.log("> node main.js delete-groups <id>");
    console.log("> node main.js show-groups");
    console.log("> node main.js create-contact-groups <contactId> <groupId>");
    console.log("> node main.js update-contact-groups <id> <contactId> <groupId>");
    console.log("> node main.js delete-contact-groups <id>");
  }
  

switch(command) {
    case "create-contact":
        ContactController.addContact(argument[0], argument[1], argument[2], argument[3]);
        break;
    case "update-contact":
        ContactController.updateContact(argument[0], argument[1], argument[2], argument[3], argument[4]);
        break;
    case "delete-contact":
        ContactController.deleteContact(argument[0]);
        break;
    case "show-contact":
        ContactController.showContact(argument[0]);
        break;
    case "create-groups":
        GroupsController.addGroups(argument[0]);
        break;
    case "update-groups":
        GroupsController.updateGroups(argument[0], argument[1]);
        break;
    case "delete-groups":
        GroupsController.deleteGroups(argument[0]);
        break;
    case "show-groups":
        GroupsController.showGroups();
        break;
    case "create-group_contact":
        GroupContactController.createGroupContact(argument[0], argument[1]);
        break;
    case "update-group_contact":
        GroupContactController.updateGroupContact(argument[0], argument[1], argument[2]);
        break;
    case "delete-group_contact":
        GroupContactController.deleteGroupContact(argument[0]);
        break;
    case "help":
        showHelp();
        break;
}
