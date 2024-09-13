const { errorView } = require("../../addres-Book/view/view")
const ModelContactGroup = require("../model/contactGroup")


const createContactGroup = async (req, res) => {
    try {
        let body = req.body

        if(!body.contactId && !body.groupId){
            return res.status(404).json({status : 'Not Found', message : 'There are not data found'})  
        }

        await ModelContactGroup.createContactGroup(body.contactId, body.groupId)
        res.status(201).json({data :body, status :'created', message : 'Succes create contactGroup'})
    }catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})   
    }
}


const updateContactGroup = async (req, res) => {
    try {
        let body = req.body

        const countContactGroup = await ModelContactGroup.updateContactGroup(body.id, body.contactId, body.groupId)

        if(!countContactGroup){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countContactGroup, status :'OK', message : 'Succes Update Groups'})
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})   
    }
}


const deleteContactGroup = async (req, res) => {
    try {
        let body = req.params.id

        const countContactGroup = await ModelContactGroup.deleteContactGroup(body)

        if(!countContactGroup){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countContactGroup, status :'OK', message : 'Succes Delete Groups'})
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})   
    }
}

module.exports = {createContactGroup, updateContactGroup, deleteContactGroup}