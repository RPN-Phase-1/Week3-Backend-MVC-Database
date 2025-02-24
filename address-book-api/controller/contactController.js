let Contact = require('../model/contact');

    let create = async (req , res) => {
        try{
            const body = req.body;
            await Contact.create(
                body.name,
                body.phoneNumber,
                body.company,
                body.email
            );
            res.status(200).json({
                status:200,
                message:"Success Create Contact",
                data: body
            })
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Failed Create Contact",
                error: err.message
            })
        }
    }

    let update = async (req,res) => {
       try{
            const body = req.body;
            const params = req.params.id
            await Contact.update(
                body.id,
                body.name,
                body.phoneNumber,
                body.company,
                body.email,
                params
            );
            res.status(200).json({
                status: 200,
                message: "Success Update Contact",
                data:body
            })
       }catch(err){
        res.status(500).json({
            status:500,
            message:"Failed update contact",
            error: err.message
        })
       }
    }

    let del = async (req,res) => {
        try{
            let params = req.params.id
            await Contact.del(params)
            res.status(200).json({
                status:200,
                message: "Success Delete Data:", params
            })
        }catch(err){
            res.status(500).json({
                status:500,
                error:err.message
            })
        }
    }

    let read = async (req,res) => {
        const result = await Contact.read()
        try{

            if(result.length > 0){
                res.status(200).json({
                    status: 200,
                    message: "Get Contact Success",
                    data: result
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"Data not found",
                    data: result
                })
            }
        }catch(err){
            res.status(500).json({
                status:500,
                message: "Failed Get Contact",
                error: err.message
            })
        }
    }


module.exports = {create, read, update, del}