class view {
    static help(){
        console.log(`
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
        > node main.js showContactGroups 
        > node main.js help 
        
        `)
    }

    static errView(err){
        console.log(err)
    }

    static createContactView(name, phoneNumber, company, email){
        console.log(`
        Success!
        Name : ${name}
        Phone Number : ${phoneNumber}
        Company : ${company}
        Email : ${email}
        `)
    }

    static showContactView(data){
        console.log(data)
    }

    static deleteContact(data){
        console.log(`${data} telah dihapus`)
    }

    static updateContactView(data){
        console.log(`Data berhasil di perbarui : ${data} `)
    }

    static createGroupView(data){
        console.log(`Grup ${data} berhasil dibuat!`)
    }

    static showGroups(data){
        console.log(data)
    }

    static deleteGroups(data){
        console.log(`${data} berhasil dihapus!`)
    }

    static updateGroups(data){
        console.log(`Grup berhasil di perbarui : ${data}`)
    }

    static createContactGroupView(data){
        console.log('Data berhasil ditambahkan')
    }

    static updateContactGroupView(data){
        console.log(`Data berhasil diperbarui : ${data}`)
    }
    
    static deleteContactGroupView(data){
        console.log(`${data} berhasil dihapus!`)
    }

    static showContactGroup(data){
        console.log(data)
    }
}

module.exports = view