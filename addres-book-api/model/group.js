const { errorView } = require("../../addres-Book/view/view")
const db = require("../connection/connection")

const createGroups = async (groupName) => {
    let sql = `INSERT INTO groups VALUES (null, ?)`
    return new Promise((succes, failed) => {
        db.run(sql, [groupName], (err) => {
            if(err){
                failed(err)
                return
            }

            db.get(`SELECT * FROM groups ORDER BY id DESC`,  (err, result) => {
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

const getGroups = async () => {
    let sql = `SELECT * FROM groups INNER JOIN contact ON groups.id = contact.id 
    INNER JOIN contactGroup ON groups.id = contactGroup.groupId`;
    // let sql = `SELECT * FROM groups`
    return new Promise((succes, failed) => {
        db.all(sql, (err, result) => {
            if(err){
                failed(err)
                return
            }

            if(!result){
                failed(new Error('Data is not found'))
                return
            }

            succes(result)
        })
    })
}

const updateGroups = async (id, groupName) => {
    let sql = `UPDATE groups SET groupName = ? WHERE id = ?`
    return new Promise((succes, failed) => {
        db.run(sql, [groupName, id], (err) => {
            if(err){
                failed(err)
                return
            }

            db.get(`SELECT * FROM groups WHERE id = ?`, [id], (err, result) => {
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

//kurang delete contactGroups
const deleteGroups = async (id) => {
    return new Promise((succes, failed) => {
        db.get(`SELECT * FROM groups WHERE id = ?`, [id], (err, result) => {
            if(err){
                failed(err)
                return
            }

            if(!result){
                failed(new Error('Data is not Found'))
                return
            }

            db.run(`DELETE FROM groups WHERE id = ?`, [id], (err) => {
                if(err){
                    failed(err)
                    return
                }

                db.run(`DELETE FROM contactGroup WHERE ID = ?`, [id], (err) => {
                    if (err) {
                      failed(err);
                      return;
                    }
        
                    succes(result);
                  });
            })
        })
    })
}

module.exports = {createGroups, getGroups, updateGroups, deleteGroups}