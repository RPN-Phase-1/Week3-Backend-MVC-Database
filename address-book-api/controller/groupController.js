let Group = require('../model/group')

let create = async(req, res) =>{
    try{
        const body = req.body;
        await Group.create(
            body.groupName
        )
        res.status(200).json({
            status: 200,
            message: "Create Group Success",
            data: body
        })
    }catch(err){
        res.status(500).json({
            status:500,
            message: "Failed Create Group",
            error: err.message
        })
    }
}

let read = async (req,res) => {
    const result = await Group.read()
    try{
        if(result.length > 0){
            res.status(200).json({
                status: 200,
                message: "Show Data Success",
                data: result
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "Data not Found",
                data:result
            })
        }
    }catch(err){
        res.status(500).json({
            status:500,
            message: "Failed showing data",
            error: err.message
        })
    }
}

let update = async (req, res) => {
    try{
        const body = req.body
        const params = req.params.id
        await Group.update(
            body.name,
            body.phoneNumber,
            body.company,
            body.email,
            params
        )
        res.status(200).json({
            status: 200,
            message: "Success Update data",
            data: body
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: "Failed Update data",
            error: err.message
        })
    }
}

let del = async (req, res) => {
    try{
        const params = req.params.id
        await Group.del(params)
        res.status(200).json({
            status: 200,
            message: "Delete Data Success. ID:", params
        })
    }catch(error){
        res.status(500).json({
            status: 500,
            message: "Failed Delete Data",
            error:error.message
        })
    }
}


module.exports = {create, read, update, del}
