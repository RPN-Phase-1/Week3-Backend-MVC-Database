let GroupContact = require("../model/groupContact");

const createContactGroups = async (req, res) => {
    try {
        const body = req.body
        const result = await GroupContact.createContactGroups(
            body.contactId,
            body.groupId
        )

        res.status(200).json({
            status: 200,
            message: 'Create group contact succsess!',
            data: body
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            err: err.message
        })
    }
}

const updateContactGroups = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id;
        const result = await GroupContact.updateContactGroups(
            body.contactId,
            body.groupId,
            id
        )

        res.status(200).json({
            status: 200,
            message: 'Update group contact succsess!',
            data: body
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            err: err.message
        })
    }
}

const deleteContactGroups = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id;
        const result = await GroupContact.deleteContactGroups(
            id
        )

        res.status(200).json({
            status: 200,
            message: 'Delete group contact succsess!',
            data: body
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            err: err.message
        })
    }
}


module.exports = {createContactGroups, updateContactGroups, deleteContactGroups};
