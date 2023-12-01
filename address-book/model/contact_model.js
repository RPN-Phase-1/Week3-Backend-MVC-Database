let db = require("../connection/connection.js");



class Contact{
    constructor(name, phoneNumber, company, email){
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.company = company,
        this.email = email
    }

    

    static async create(name, phoneNumber, company, email){
        let newContact = new Contact(name, phoneNumber, company, email);
        return new Promise((resolve, reject)=>{
          
              
                db.run(
                    `INSERT INTO Contact VALUES (null,?,?,?,?)`,
                    [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
                 
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                })
                
           
           
        })
    }

    static async update(id,name,phoneNumber,company,email){
        return new Promise((resolve,reject)=>{
            db.run(
                `UPDATE Contact SET name=?, phoneNumber=?, company=?, email=? WHERE id=?`,
                [name,phoneNumber,company,email,id],
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                }
            )
        })
    }

    static async delete(id){
        return new Promise((resolve,reject)=>{
            db.run(`DELETE FROM Contact WHERE id=?`,
            [id],
            (err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve();
                }
            }
            )
        })
    }


}

module.exports = Contact;