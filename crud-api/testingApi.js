const axios = require('axios')

const run = async () => {
    let url = "http://localhost:4000/employees"

    try{
        let response = await axios.post(url, {
            name: "TESTING2",
            phoneNumber: "3812841231",
            position: "ME",
            email: "testing@gmail.com"
        })

        console.log(response.data)
    }catch(err){
        console.log(err)
    }
}

run()