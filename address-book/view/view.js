class View{
    static testView(){
        console.log("test aja");
    }

    static help(){
        console.log(`
        ====================
        ADDRESS BOOK COMMAND
        ====================

        v node main.js create Contact <name> <phoneNumber> <company> <email>
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
        v node main.js help
        
        `);
    }

    static createContactView(){
        console.log("success create contact");
    }

    static updateContactView(){
        console.log("success update contact");
    }

    static deleteContactView(){
        console.log("success delete contact");
    }
}

module.exports = View;