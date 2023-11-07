let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require('./controller/contactController')

/*
====================
ADDRESS BOOK COMMAND
====================
> node main.js create Contact <name> <phoneNumber> <company> <email>
> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
> node main.js delete Contact <id>
> node main.js showContact
> node main.js create Groups <groupName>
> node main.js update Groups <id> <groupName>
> node main.js delete Groups <id>
> node main.js showGroups
> node main.js create ContactGroups <contactId> <groupId>
> node main.js update ContactGroups <id> <contactId> <groupId>
> node main.js delete ContactGroups <id> 
> node main.js help
*/

switch (command) {
    case "create" :
        ContactController.createContact(argument[0] , argument[1], argument[2], argument[3])
        break;

    case "update":
        ContactController.updateContact(argument[0], argument[1], argument[2], argument[3], argument[4])
        break;

    case "delete":
        ContactController.deleteContact(argument[0])
        break;
}