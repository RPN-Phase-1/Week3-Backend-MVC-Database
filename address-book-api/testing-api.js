const axios = require('axios')

const run = async () => {
    let url = "http://localhost:3000/contact"

    try{
        let response = await axios.get(url, {
            // name: "mayuyu",
            // phoneNumber: "21212",
            // company: "aurory",
            // email: "mayu@gm"
        })

        console.log(response.data)
    }catch(err){
        console.log(err)
    }
}

run()