let db = require("../connection/connection");

let create = (name, phoneNumber, company, email) => {
    return new Promise((resolve, reject) => {
        db.run(`
        INSERT INTO Contact VALUES (null, ?, ?, ?, ?)
        `, [name, phoneNumber, company, email],
        (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

let read = () => {
    return new Promise((resolve,reject) =>{
        db.all(`SELECT *
                FROM Contact
                INNER JOIN groupContact ON Contact.id = groupContact.contactId`,
                (err,data) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(data)
                    }
                })
    })
}

let update = (name, phoneNumber, email, company, id) => {
    return new Promise((resolve,reject) => {
        db.run(`UPDATE Contact
                SET name = ?,
                phoneNumber = ?,
                email = ?,
                company = ?
                WHERE id = ?`,
                [name,phoneNumber, email, company, id],
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
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM Contact
                WHERE id = ?`, [id],
                (err) =>{
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                })
    })
}

module.exports = {create, read, update, del}

