let groupContact = require('../model/groupContact')
let view = require('../view/view')

class GroupContactController{
    static create = (contactId, groupId) => {
        groupContact.create(contactId, groupId).then(() => {
            view.createContactView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static update = (id, contactId, groupId) => {
        groupContact.update(id,contactId,groupId).then(() => {
            view.updateView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static delete = (id) => {
        groupContact.delete(id).then(() => {
            view.deleteView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static show = () => {
        groupContact.show().then((table) =>{
            view.showView(table)
        }).catch((err) =>{
            view.errorView(err)
        })
    }
}

module.exports = GroupContactController;