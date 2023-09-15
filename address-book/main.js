let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require("./contactController");
let GroupsController = require("./groupsController");

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
    case "create": {
      const [table, ...rest] = argument;
      if (table === 'Contact') {
        ContactController.create(rest);
      } else if (table === 'Groups') {
        GroupsController.create(rest);
      } else if (table === 'ContactGroups') {

      } else {
        ContactController.help();
      }
      break;
    }
    case "update": {
      const [table, ...rest] = argument;
      ContactController.update(rest);
      break;
    }
    case "delete": {
      const [table, id] = argument;
      ContactController.delete(id);
      break;
    }
    case "showContact":
      ContactController.show();
      break;
    default:
      ContactController.help();
      break;
}