let Group = require('../model/group')
let view = require('../view/view')

class GroupController{
    static create = (groupName) => {
        Group.create(groupName).then(() => {
            view.createContactView();
        }).catch((err) =>{
            view.errorView(err)
        })
    }

    static update = (id, groupName) => {
        Group.update(id, groupName).then(() => {
            view.updateView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static delete = (id) => {
        Group.delete(id).then(() => {
            view.deleteView()
        }).catch((err) => {
            view.errorView(err)
        })
    }

    static show = () => {
        Group.show().then((table) => {
            view.showView(table)
        }).catch((err) => {
            view.deleteView(err)
        })
    }
}

module.exports = GroupController;