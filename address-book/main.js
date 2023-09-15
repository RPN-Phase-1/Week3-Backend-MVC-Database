let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require("./contactController");

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
      ContactController.create(rest);
      break;
    }
    case "update": {
      const [table, ...rest] = argument;
      ContactController.update(table, rest);
      break;
    }
    case "delete": {
      const [table, ...rest] = argument;
      ContactController.delete(table, rest);
      break;
    }
    default:
      ContactController.help();
      break;
}