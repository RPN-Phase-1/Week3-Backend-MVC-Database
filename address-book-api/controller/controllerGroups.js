const Groups = require('../model/groups')

const createGroups = async (req, res) => {
    try {
        const body = req.body;
        const result = await Groups.createGroups(body.groupName);

        res.status(200).json({
            status: 200,
            message: 'Create groups succsess!',
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

const updateGroups = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await Groups.updateGroups(body.groupName, id);

        res.status(200).json({
            status: 200,
            message: 'Update groups succsess!',
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

const deleteGroups = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await Groups.deleteGroups(id);

        res.status(200).json({
            status: 200,
            message: 'Delete groups succsess!',
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

const getGroups = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await Groups.getGroups();

        res.status(200).json({
            status: 200,
            message: 'Delete groups succsess!',
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

module.exports = {getGroups, createGroups, updateGroups, deleteGroups}