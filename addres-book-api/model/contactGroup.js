const db = require("../connection/connection")


const createContactGroup = async (contactId, groupId) => {
    return new Promise((succes, failed) => {
        db.run(`INSERT INTO contactGroup VALUES (null, ?, ?)`, [contactId, groupId], (err) => {
            if(err){
                failed(err)
                return
            }

            db.get(`SELECT * FROM contactGroup ORDER BY id DESC`, (err, result) => {
                if(err){
                    failed(err)
                    return
                }

                if(!result){
                    failed(new Error('Data is not Found'))
                    return
                }

                succes(result)
            })
        })
    })
}


const updateContactGroup = async (id, contactId, groupId) => {
    let sql = `UPDATE contactGroup SET contactId = ?, groupId = ? WHERE id = ? `
    return new Promise((succes, failed) => {
        db.run(sql, [contactId, groupId, id], (err) => {
            if(err){
                failed(err)
                return
            }

            db.get(`SELECT * FROM contactGroup WHERE id = ?`, [id], (err, result) => {
                if(err){
                    failed(err)
                    return
                }

                if(!result){
                    failed(new Error('Data is not Found'))
                    return
                }

                succes(result)
            })
        })
    })
}


const deleteContactGroup = async (id) => {
    return new Promise((succes, failed) => {
        db.get(`SELECT * FROM contactGroup WHERE id = ?`, [id], (err, result) => {
            if(err){
                failed(err)
                return
            }

            if(!result){
                failed(new Error('Data is not Found'))
                return
            }

            db.run(`DELETE FROM contactGroup WHERE id = ?`, [id], (err) => {
                if(err){
                    failed(err)
                    return
                }

                succes(result)
            })
        })
    })
}


module.exports = {createContactGroup, updateContactGroup, deleteContactGroup}