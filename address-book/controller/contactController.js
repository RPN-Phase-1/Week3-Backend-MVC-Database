let Contact = require('../model/contact');
let view = require('../view/view')

class ContactController{
    static create = (name, phoneNumber, company, email) => {
        Contact.create(name,phoneNumber,company,email).then((table) => {
            view.createContactView(table);
        }).catch((err) =>{
            view.errorView(err);
        })
    }

    static update = (id, name, phoneNumber, company, email) => {
        Contact.update(id,name, phoneNumber, company, email).then(() =>{
            view.updateView()
        }).catch((err) =>{
            view.errorView(err)
        })
    }

    static delete = (id) => {
        Contact.delete(id).then(() => {
            view.deleteView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static show = () => {
        Contact.show().then((table) => {
            view.showView(table)
        }).catch((err) =>{
            view.errorView(err)
        })
    }
}

module.exports = ContactController