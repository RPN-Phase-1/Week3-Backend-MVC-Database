const db = require('../connection/connection')

class Contact {
    static create(name, phoneNumber, company, email) {
		return new Promise((resolve, reject) => {
			db.run(`
				INSERT INTO Contact VALUES(null, ?, ?, ?, ?)
				`, [name, phoneNumber, company, email], err => {
					err ? reject(err) : resolve('Data berhasil ditambahkan')
				})	
		})
	}

    static async showContact() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT Contact.*, Groups.groupName
            FROM Contact
            LEFT JOIN GroupContact ON Contact.id = GroupContact.ContactID
            LEFT JOIN Groups ON GroupContact.GroupID = Groups.id            
            `, (err, result) => {
                if(err){
                    reject(err)
                    return
                }

                return resolve(result)
            })
        })
    }

    static async updateContact(id, name, phoneNumber, company, email){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Contact Where id = ?`, [id], (err, result) => {
                if(err){
                    return reject(err.message)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                db.run(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email =? WHERE id = ?`, [name, phoneNumber, company, email, id], err => {
                    if(err){
                        return reject(err)
                    }

                    return resolve('Data berhasil diudpate')
                })
            })
        })
    }

    static async deleteContact(id){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * From Contact Where id = ?`, [id], (err, result) => {
                if(err){
                    reject(err)
                    return
                }

                if(!result){
                    reject('ID tidak ditemukan')
                    return
                }

                db.run(`DELETE FROM Contact WHERE id = ?`, [id], (err) => {
                    if(err){
                        return reject(err)
                    }
                    
                    return resolve('Data berhasil dihapus')
                })

                
            })
        })
    }
}

module.exports = Contact