const axios = require("axios");

const run = async () => {
  let url = "http://localhost:3000/employees";

  try {
    let response = await axios.get(url, {
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

run();
