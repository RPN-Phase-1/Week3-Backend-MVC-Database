const ModuleGroups = require("../model/group")

const createGroups = async (req, res) => {
    try {
        let body = req.body

        if(!body.groupName){
            return res.status(404).json({status : 'Not Found', message : 'There are not data found'})  
        }
     await ModuleGroups.createGroups(body.groupName)

     res.status(201).json({data :body, status :'created', message : 'Succes create Groups'})

    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})   
    }
}

const getGroups = async (req, res) => {
    try {
        let body = req.body

        const countGroups = await ModuleGroups.getGroups(body)

        if(!countGroups){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countGroups, status :'OK', message : 'Succes Get Groups'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})
    }
}

const updateGroups = async (req, res) => {
    try {
        let body = req.body

        const countGroups = await ModuleGroups.updateGroups(body.id, body.groupName)

        if(!countGroups){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countGroups, status :'OK', message : 'Succes Update Groups'})
        }

    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})
    }
}

const deleteGroups = async (req, res) => {
    try {
        let body = req.params.id
        const countGroups = await ModuleGroups.deleteGroups(body)

        if(!countGroups){
            return res.status(404).json({status : 'Not Found', message : 'Data is not Found'})
        }else{
            return res.status(200).json({data :countGroups, status :'OK', message : 'Succes Delete Groups'})
        }

    } catch(err){
        console.log(err)
        return res.status(500).json({error : err.message})
    }
}

module.exports = {createGroups, getGroups, updateGroups, deleteGroups}