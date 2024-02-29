const Contact = require("../model/contact")

class contactController {
    static async createContact(req, res){
        try{
            const { name, phoneNumber, company, email } = req.body
            const requiredFields = { name, phoneNumber, company, email }
            const missingFields = Object.keys(requiredFields).filter((key) => !requiredFields[key])
            const errorMessage = missingFields.map((field) => `${field} required`).join(', ')

            if(missingFields.length > 0) return res.status(400).json({       
                status : 400, 
                message : errorMessage,
            })

            await Contact.create(name, phoneNumber, company, email)
            return res.status(201).json({
                status: 201,
                message: 'Contact berhasil dibuat'
            })
             
        }catch(err){
            return res.status(500).json({ error : err.message})
        }
    }

    static async showContact(req, res){
        try{
            const result = await Contact.showContact()

            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : result
            })
            
        }catch(err){
            return res.status(500).json({
                status : 500,
                message : err.message
            })
        }
    }

    static async updateContact(req, res){
        try{
            const id = req.params.id
            const { name, phoneNumber, company, email } = req.body
            const requiredFields = { name, phoneNumber, company, email }
            const missingFields = Object.keys(requiredFields).filter((key) => !requiredFields[key])
            const errorMessage = missingFields.map((field) => `${field} required`).join(', ')
            if(missingFields.length > 0) return res.status(400).json({
                status : 400,
                message: errorMessage
            })

            const result = await Contact.updateContact(id, name, phoneNumber, company, email)
            return res.status(200).json({
                status : 201,
                message : result
            })
        }catch(err){
            return res.status(500).json({ error : err.message})
        }
    }

    static async deleteContact(req, res){
        try{
            const id = req.params.id
            if(!id) return res.status(400).json({
                status: 400,
                message: 'Masukan ID'
            })

            const result = await Contact.deleteContact(id)

            return res.status(200).json({
                status : 201,
                message : result
            })
            
        }catch(err){
            return res.status(500).json({ error : err.message})
        }
    }
}

module.exports = contactController