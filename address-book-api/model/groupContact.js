let db = require('../connection/connection')

let create = (contactId, groupId) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO groupContact VALUES (null, ?, ?)`,
        [contactId,groupId],
        (err) =>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

let update = (contactId, groupId, id) => {
    return new Promise((resolve,reject) =>{
        db.run(`UPDATE groupContact
                SET contactId = ?,
                groupId = ?
                WHERE id = ?`,
                [contactId,groupId,id],
                (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                })
    })
}

let del = (id) => {
    return new Promise((resolve,reject) => {
        db.run(`DELETE FROM groupContact
                WHERE id = ?`, [id],
                (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                })
    })
}

module.exports = {create, update, del}

// class GroupContact{
//     constructor(contactId, groupId){
//         this.contactId = contactId
//         this.groupId = groupId
//     }
    
//     static create(contactId, groupId){
//         let newGroupContact = new GroupContact(contactId, groupId);
//         return new Promise((resolve,reject) => {
//             db.run(`INSERT INTO GroupContact VALUES (null, ?, ?)`, 
//             [newGroupContact.contactId, newGroupContact.groupId],
//             (err) =>{
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve()
//                 }
//             })
//         })
//     }

//     static update(id, contactId, groupId){
//         return new Promise((resolve, reject) => {
//             db.run(`UPDATE GroupContact
//                     SET contactId = ?,
//                     groupId = ?
//                     WHERE id =?`,
//                     [contactId,groupId,id],
//                     (err) => {
//                         if(err){
//                             reject(err)
//                         }else{
//                             resolve()
//                         }
//                     })
//         })
//     }

//     static delete(id){
//         return new Promise((resolve,reject) => {
//             db.run(`DELETE FROM GroupContact
//             WHERE id = ?`, [id],
//             (err) =>{
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve()
//                 }
//             })
//         })
//     }

//     static show = () =>{
//         return new Promise((resolve,reject) => {
//             db.all(`SELECT * FROM GroupContact`,(err,record) => {
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve(record)
//                 }
//             })
//         })
//     }
// }

// module.exports = GroupContact