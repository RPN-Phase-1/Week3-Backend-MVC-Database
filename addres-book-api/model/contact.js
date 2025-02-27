const { ERROR } = require("sqlite3")
const db = require("../connection/connection")
let validator = require("validator");


const createContact = async (name, phoneNumber, company, email) => { 
    let cekEmail = validator.isEmail(email);
    let cekPhone = validator.isMobilePhone(phoneNumber, "id-ID");
    return new Promise((succes, failed) => {
        if (!cekEmail) {
            console.log("Masukan Email Yang Benar!");
            failed(new Error("invalid Email"));
            return;
          }
    
          if (!cekPhone) {
            console.log("Anda harus menggunakan nomer dinegara indonesia");
            failed(new Error("invalid Number"));
            return;
          }

        //validasi email dan phoneNumber tidak boleh sama
     db.get(`SELECT * FROM contact WHERE phoneNumber = ? OR email = ?`, [phoneNumber, email], 
     (err, result) => {
        if(err){
            failed(err)
            return
        }

        if(result){
            failed(new Error('email or phoneNumber already exists'))
            return
        }

        db.run(`INSERT INTO contact VALUES (null, ?, ?, ?, ?)`,
         [name, phoneNumber, company, email], (err) => {
            if (err){
                failed(err)
                return
            }
            succes(result)
        })
     })
    })
}

const getContacts = async () => {
    let sql = `SELECT * FROM contact INNER JOIN contactGroup ON contact.id = contactGroup.contactId
    INNER JOIN groups ON contactGroup.groupId = groups.id`
    // let sql = `SELECT * FROM contact` 
    return new Promise((succes, failed) => {
        db.all(sql, (err, result) => {
            if(err){
                failed(err)
                return
            }

            if(!result){
                failed(new Error('Data not Found'))
            }

            succes(result)
        })
    })
}

const updateContact = async (id, name, phoneNumber, company, email) => {
    let sql = `UPDATE contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`
    return new Promise((succes, failed) => {
        db.run(sql, [name, phoneNumber, company, email, id], (err) => {
            if (err){
                failed(err)
                return
            }

            db.get(`SELECT * FROM contact WHERE id = ?`, [id], (err, result) => {
                if(err){
                    failed(err)
                    return
                }

                if(!result){
                    failed(new Error('Data not Found'))
                    return
                }

                succes(result)
            })
        })
    })
}


const deleteContact = async (id) => {
    return new Promise((succes, failed) => {
        db.get(`SELECT * FROM contact WHERE id = ?`, [id], (err, result) => {
            if(err){
                failed(err)
                return
            }

            if(!result){
                failed(new Error('Data is not Found'))
                return
            }

            db.run(`DELETE FROM contact WHERE id = ?`, [id], (err) => {
                if(err){
                    failed(err)
                    return
                }

                succes(result)
            })
        })
    })
}



module.exports = {createContact, getContacts, updateContact, deleteContact}