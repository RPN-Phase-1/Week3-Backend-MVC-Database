let db = require("../connection");

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static create(name, phoneNumber, company, email){
        let newContact = new Contact(name, phoneNumber, company, email);
        return new Promise((resolve,reject) => {
            db.run(`INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`, 
            [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
            (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }

    static update = (id, name, phoneNumber, company, email) =>{
        let updateData = new Contact (name, phoneNumber, company, email);
        return new Promise((resolve, reject) => {
            db.run(
                `
                UPDATE Contact
                SET name = ? ,
                phoneNumber = ? ,
                company = ? ,
                email = ?
                WHERE id = ?
                `,
                [updateData.name, updateData.phoneNumber, updateData.company, updateData.email,id],
                (err) =>{
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                })
        })
    }

    static delete = (id) =>{
        return new Promise((resolve,reject) => {
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

    // static show = () => {
    //     return new Promise((resolve, reject) =>{
    //         db.all(`SELECT * FROM Contact`,(err,record) => {
    //             if(err){
    //                 reject(err)
    //             }else{
    //                 resolve(record)
    //             }
    //         })
    //     })
    // }
}

module.exports = Contact