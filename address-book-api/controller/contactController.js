let Contact = require('../model/contact');

const getContact = async (req, res) => {
    try {
        const result = await Contact.getContact();

        res.status(200).json({
            status : 200,
            message : 'Show contact Succsess!',
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            err: err.message
        })
    }
}

const createContact = async (req, res) => {
    try {
        const body = req.body;
        const result = await Contact.createContact(
            body.name,
            body.phoneNumber,
            body.company,
            body.email
        );

        res.status(200).json({
            status : 200,
            message : 'Create contact Succsess!',
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

const updateContact = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await Contact.updateContact(
            body.name,
            body.phoneNumber,
            body.company,
            body.email,
            id
        );

        res.status(200).json({
            status : 200,
            message : 'Updata contact Succsess!',
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

const deleteContact = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await Contact.deleteContact(
            id
        );

        res.status(200).json({
            status : 200,
            message : 'Delete contact Succsess!',
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

module.exports = {createContact, updateContact, deleteContact, getContact};
