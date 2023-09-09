class View {
    static viewCreateContact() {
        console.log('Create contact succsess!')
    }

    static viewUpdateContact() {
        console.log('Data successfully updated!')
    }

    static viewDeleteContact() {
        console.log('Data deleted successfully!')
    }

    static viewShowContact(data) {
        console.table(data)
    }

    static viewHelp() {
        console.log(`
        =====================================================================================
                                    ADDRESS BOOK COMMAND
        =====================================================================================
        > node index.js createContact <name> <phoneNumber> <company> <email>
        > node index.js updateContact <id> <name> <phoneNumber> <company> <email>
        > node index.js deleteContact <id>
        > node index.js showContact
        > node index.js createGroups <groupName>
        > node index.js updateGroups <id> <groupName>
        > node index.js deleteGroups <id>
        > node index.js showGroups
        > node index.js createContactGroups <contactId> <groupId>
        > node index.js updateContactGroups <id> <contactId> <groupId>
        > node index.js deleteContactGroups <id> 
        > node index.js help`)
    }

    static ErrorView(err) {
        console.log(err)
    }

    static createGroups() {
        console.log('Berhasil Membuat Groups')
    }
    
    static updateGroups() {
        console.log('Update groups succsess!')
    }

    static deleteGroups() {
        console.log('Group deleted successfully!')
    }

    static showGroups(data) {
        console.table(data)
    }

    static viewCreateGroupContact() {
        console.log('Berhasil Membuat GroupContact')
    }

    static viewDeleteGroupsContact(){
        console.log('GroupsContact deleted successfully')
    }

    static viewUpdateGroupContact() {
        console.log('Groups Contact update successfully!')
    }
}

module.exports = View;