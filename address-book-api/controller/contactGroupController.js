const ContactGroup = require("../model/contactGroup")

class contactGroupController {
    static async createContactGroup(req, res) {
        try{
            const { contactID, groupID } = req.body
            await ContactGroup.createContactGroup(contactID, groupID)
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : 'Contact group berhasil dibuat'
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }

    static async updateContactGroup(req, res) {
        try{
            const id = req.params.id
            const { contactID, groupID } = req.body
            const result = await ContactGroup.updateContactGroup(id, contactID, groupID)
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : result
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }

    static async deleteContactGroup(req, res) {
        try{
            const id = req.params.id
            const result = await ContactGroup.deleteContactGroup(id)
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : result
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }
}

module.exports = contactGroupController