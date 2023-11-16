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
