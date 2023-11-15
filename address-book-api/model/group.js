let db = require('../connection/connection')


let create = (groupName) => {
  return new Promise((resolve, reject) =>{
    db.run(`INSERT INTO Group VALUES(null, ?)`,[groupName],
    (err) =>{
      if(err){
        reject(err)
      }else{
        resolve()
      }
    })
  })
}

let read = () => {
  db.all(`SELECT * FROM Group
          LEFT JOIN groupContact on Group.id = groupContact.groupId`,(err,data) =>{
            if(err){
              reject(err)
            }else{
              resolve(data)
            }
          })
}

let update = (groupName, id) => {
  db.run(`UPDATE Group
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
  db.run(`DELETE FROM Group WHERE id = ?`, [id],
  (err) => {
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
}

module.exports = {create, read, update, del}
// class Groups {
//     constructor(groupName) {
//       this.groupName = groupName;
//     }
  
//     static create(groupName) {
//       let newGroups = new Groups(groupName);
//       return new Promise((resolve, reject) => {
//         db.run(`INSERT INTO Groups VALUES (null, ?)`, newGroups.groupName,
//           (err) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve();
//             }
//           })
//       })
//     }
  
//     static update(id, groupName) {
//       let newGroups = new Groups(groupName);
//       return new Promise((resolve, reject) => {
//         db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, newGroups.groupName, id,
//           (err) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve();
//             }
//           })
//       })
//     }
  
//     static delete(id) {
//       return new Promise((resolve, reject) => {
//         db.run(`DELETE FROM Groups WHERE id = ?`, id,
//           (err) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve();
//             }
//           })
//       })
//     }
  
//     static show() {
//       return new Promise((resolve, reject) => {
//         db.all(`SELECT *
//         FROM Groups
//         INNER JOIN GroupContact on Groups.id = GroupContact.GroupId 
//         INNER JOIN Contact on Contact.id = GroupContact.ContactId`,(err, rows) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(rows);
//           }
//         })
//       })
//     }
//   }
  
//   module.exports = Groups;