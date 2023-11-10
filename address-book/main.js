let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require('./controller/contactController');
const GroupContactController = require('./controller/groupContactController');
let GroupController = require('./controller/groupController')

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
    case "createContact" :
        ContactController.create(argument[0] , argument[1], argument[2], argument[3])
        break;

    case "updateContact":
        ContactController.update(argument[0], argument[1], argument[2], argument[3], argument[4])
        break;

    case "showContact":
        ContactController.show()
        break;

    case "deleteContact":
        ContactController.delete(argument[0])
        break;

    case "createGroupContact":
        GroupContactController.create(argument[0] , argument[1])
        break;

    case "deleteGroupContact":
        GroupContactController.delete(argument[0])
        break;

    case "showGroupContact":
        GroupContactController.show()
        break;

    case "createGroup":
        GroupController.create(argument[0])
        break;

    case "updateGroup":
        GroupController.update(argument[0], argument[1])
        break;

    case "deleteGroup":
        GroupController.delete(argument[0])
        break;

    case"showGroup":
        GroupController.show()
        break;
}