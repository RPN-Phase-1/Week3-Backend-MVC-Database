const ModelContact = require("../model/contact")


const createContact = async (req, res) => {
    try {

        let body = req.body
        await ModelContact.createContact(body.name, body.phoneNumber, body.company, body.email)

        res.status(201).json({data :body, status :'created', message : 'Succes create contact'})
       
    } catch(err){
        console.log(err)
       return res.status(500).json({error : err.message})        
    }
}

const getContacts = async (req, res) => {
    try {
        let body = req.body
        const countContact = await ModelContact.getContacts(body)

        if(!countContact){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countContact, status :'OK', message : 'Succes Get contact'})
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})    
    }
}

const updateContact = async (req, res) => {
    try {
        let body = req.body
        const countContact = await ModelContact.updateContact(body.id, body.name,  body.phoneNumber, body.company, body.email)

        if(!countContact){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        } else {
            return res.status(200).json({data : body, status :'OK', message : 'Succes Update contact'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})
    }
}

const deleteContact = async (req, res) => {
    try {
        let body = req.params.id
        const countContact = await ModelContact.deleteContact(body)

        if(!countContact){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        } else {
            return res.status(200).json({data : countContact, status :'OK', message : 'Succes Delete contact'})
        }
    } catch(err){
    console.log(err)
    return res.status(500).json({error : err.message})
    }
}


module.exports = {createContact, getContacts, updateContact, deleteContact}