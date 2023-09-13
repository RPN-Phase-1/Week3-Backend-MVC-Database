const axios = require('axios')

const run = async () => {
    let url = "http://localhost:3000/employees"

    try{
        let response = await axios.get(url, {
            id: 2,
            name: "TESTING223231",
            phone: "381284123113123",
            position: "BE",
            email: "testing13@gmail.com"
        })

        console.log(response.data)
    }catch(err){
        console.log(err)
    }
}

run()