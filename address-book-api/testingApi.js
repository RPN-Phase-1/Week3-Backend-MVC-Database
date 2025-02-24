const axios = require("axios");

const run = async () => {
  let url = "http://localhost:3000/contact/4";

  try {

    let response = await axios.put(url, {
        name: "Testtest123",
        phoneNumber: "321321",
        company: 'blublub',
        email: 'test123@gmail.com'
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

run();