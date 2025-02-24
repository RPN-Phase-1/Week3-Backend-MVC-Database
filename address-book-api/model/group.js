const db = require('../connection/connection')

class Groups{
    static async createGroup(groupName){
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups VALUES (null, ?)`, [groupName], (err) => {
                if(err){
                    return reject(err.message)
                }

                return resolve()
            })
        })
    }

    static async showGroups(){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups`, (err, result) => {
                if(err){
                    return reject(err)
                }

                return resolve(result)
            })
        })
    }

    static async deleteGroups(id){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Groups WHERE id = ?`, [id], (err, result) => {

                if(err){
                    return reject(err)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                db.run(`DELETE FROM Groups WHERE id = ?`, [id], (err) =>{
                    if(err){
                        return reject(err)
                    }

                    return resolve('Group berhasil dihapus')
                })
                
            })
        })
    }

    static async updateGroups(id, groupName){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Groups Where id = ?`, [id], (err, result) => {
                if(err){
                    return reject(err.message)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], (err) => {
                    if(err){
                        return reject(err.message)
                    }

                    db.get(`SELECT * FROM Groups WHERE id = ?`, [id], (err) => {
                        if(err){
                            return reject(err.message)
                        }

                        return resolve('Group berhasil di update')
                    })
                })
            })
        })
    }
}

module.exports = Groups