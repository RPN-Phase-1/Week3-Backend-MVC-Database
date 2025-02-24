let groupContact = require('../model/groupContact')

let create = async(req,res) =>{
    try{
        const body = req.body;
        await groupContact.create(
            body.contactId,
            body.groupId
        )
        res.status(200).json({
            status:200,
            message: "Success create Group Contact",
            data: body
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: "Failed Create Data",
            error: err.message
        })
    }
}

let update = async (req,res) => {
    try{
        const body = req.body;
        const params = req.params.id
        await groupContact.update(
            body.contactId,
            body.groupId,
            params
        )
        res.status(200).json({
            status: 200,
            message: "Update Data Success",
            data: body
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message:"Failed Update Data",
            error: err.message
        })
    }
}

let del = async(req,res) => {
    try{
        const params = req.params.id
        await groupContact.del(params)
        res.status(200).json({
            status: 200,
            message: "Delete Data Success",
        
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message:"Failed Delete data",
            error: err.message
        })
    }
}

module.exports = {create,update,del}