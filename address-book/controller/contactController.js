let Contact = require('../model/contact');
let view = require('../view/view')

class ContactController{
    static createContact = (name, phoneNumber, company, email) => {
        Contact.create(name,phoneNumber,company,email).then(() => {
            view.createContactView();
        }).catch((err) =>{
            view.errorView(err);
        })
    }

    static updateContact = (id, name, phoneNumber, company, email) => {
        Contact.update(id,name, phoneNumber, company, email).then(() =>{
            view.updateView()
        }).catch((err) =>{
            view.errorView(err)
        })
    }

    static deleteContact = (id) => {
        Contact.delete(id).then(() => {
            view.deleteView()
        }).catch((err) => {
            view.errorView(err)
        })
    }
}

module.exports = ContactController