const Groups = require("../model/group")

class groupController {
    static async getGroups(req, res){
        try{
            const result = await Groups.showGroups()
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : result
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }

    static async createGroups(req,res){
        try{
            const groupName = req.body.groupName
            if(!groupName) return res.status(400).json({
                status : 400,
                message : 'Masukan nama group'
            })

            await Groups.createGroup(groupName)
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : 'Group berhasil dibuat'
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }

    static async updateGroups(req, res){
        try{

            const id = req.params.id
            const groupName = req.body.groupName
            if(!id) return res.status(400).json({
                status : 400,
                message : 'ID invalid'
            }) 

            if(!groupName) return res.status(400).json({
                status : 400,
                message : 'Masukan nama group'
            })

            const result = await Groups.updateGroups(id, groupName)
            return res.status(200).json({
                status : 200,
                message : 'success!',
                data : result
            })
            
        }catch(err){    
            return res.status(500).json({ error : err.message})
        }
    }

    static async deleteGroups(req, res){
        try{
            const id = req.params.id
            if(!id) return res.status(400).json({
                status : 400,
                message : 'ID invalid'
            })

            const result = await Groups.deleteGroups(id)
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

module.exports = groupController