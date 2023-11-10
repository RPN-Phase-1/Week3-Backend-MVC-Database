let db = require('../connection')

class Group{
    constructor(groupName){
        this.groupName = groupName;
    }

    static create = (groupName) => {
        let newGroup = new Group(groupName)
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Group VALUES (null,?)`,
            [newGroup.groupName],
            (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }

    static update = (id, groupName) =>{
        return new Promise((resolve,reject) => {
            db.run(`UPDATE Group
                    SET groupName = ?
                    WHERE id = ? `,
                    [groupName,id],
                    (err) => {
                        if(err){
                            reject(err)
                        }else{
                            resolve()
                        }
                    })
        })
    }

    static delete = (id) => {
        return new Promise((resolve,reject) => {
            db.run(`DELETE FROM GroupContact
                    WHERE id = ?`,[id],
                    (err) =>{
                        if(err){
                            reject(err)
                        }else{
                            resolve()
                        }
                    })
        })
    }

    static show = () => {
        return new Promise((resolve,reject) => {
            db.all(`SELECT * FROM Group`,(err,record) => {
                if(err){
                    reject(err)
                }else{
                    resolve(record)
                }
            })
        })
    }
}

module.exports = Group;