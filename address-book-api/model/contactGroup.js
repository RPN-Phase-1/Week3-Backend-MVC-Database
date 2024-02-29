const db = require('../connection/connection')

class ContactGroup {
    static async createContactGroup(contact, group){
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact VALUES(null, ?, ?)`, [contact, group], (err) => {
                if(err){
                    return reject(err)
                }
    
                return resolve()
            })
        })
    }


    static async deleteContactGroup(id){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM GroupContact WHERE id = ?`, [id], (err, result) => {
    
                if(err){
                    return reject(err)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

        
                
                db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], err => {
                    if(err){
                        return reject(err.message)
                    }

                    return resolve('Data berhasil dihapus')
                })
                
            })
        })
    }

    static async updateContactGroup(id, contact, group){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM GroupContact WHERE id = ?`, [id], (err, result) => {
                if(err){
                    return reject(err)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                db.run(`UPDATE GroupContact SET ContactID = ?, GroupID = ? WHERE id = ?`, [contact, group, id], err =>{
                    if(err){
                        return reject(err)
                    }

                    db.get(`SELECT * FROM GroupContact WHERE id = ?`, [id], (err) => {
                        if(err){
                            return reject(err)
                        }

                        return resolve('Data berhasil di update')
                    })
                })
            })
        })
    }
}

module.exports = ContactGroup