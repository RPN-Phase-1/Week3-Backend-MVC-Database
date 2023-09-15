let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require("./contactController");
let GroupsController = require("./groupsController");
let GroupContactController = require("./groupContactController");

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
        GroupContactController.create(rest);
      } else {
        ContactController.help();
      }
      break;
    }
    case "update": {
      const [table, ...rest] = argument;
      if (table === 'Contact') {
        ContactController.update(rest);
      } else if (table === 'Groups') {
        GroupsController.update(rest);
      } else if (table === 'ContactGroups') {
        GroupContactController.update(rest);
      } else {
        ContactController.help();
      }
      break;
    }
    case "delete": {
      const [table, id] = argument;
      if (table === 'Contact') {
        ContactController.delete(id);
      } else if (table === 'Groups') {
        GroupsController.delete(id);
      } else if (table === 'ContactGroups') {
        GroupContactController.delete(id);
      } else {
        ContactController.help();
      }
      break;
    }
    case "showContact":
      ContactController.show();
      break;
    case "showGroups":
      GroupsController.show();
      break;
    default:
      ContactController.help();
      break;
}