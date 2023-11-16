let db = require('../connection/connection')


let create = (groupName) => {
  return new Promise((resolve,reject) => {
    db.run(`INSERT INTO Groups VALUES (null, ?)`, groupName, (err) => {
      if(err){
        reject(err)
      }else{
        resolve()
      }
    })
  })
}

let read = () => {
  return new Promise((resolve,reject) => {
    db.all(`SELECT * FROM Groups
            INNER JOIN groupContact on Group.id = groupContact.groupId`,(err,data) =>{
              if(err){
                reject(err)
              }else{
                resolve(data)
              }
            })

  })
}

let update = (groupName, id) => {
  db.run(`UPDATE Groups
          SET groupName = ?
          WHERE id = ?`, [groupName, id],
          (err) => {
            if(err){
              reject(err)
            }else{
              resolve()
            }
          })
}

let del = (id) => {
  db.run(`DELETE FROM Groups WHERE id = ?`, [id],
  (err) => {
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
}

module.exports = {create, read, update, del}
