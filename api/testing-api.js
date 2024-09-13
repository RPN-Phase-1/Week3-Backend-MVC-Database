const axios = require("axios");

// URL endpoint API cuaca
const yugiohAPI =
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk";
const myApi = "http://localhost:4000/Employee";

// Membuat permintaan HTTP ke API cuaca
axios
  .get(myApi)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error("Kesalahan:", error);
  });

axios
  .post(myApi, {
    Name : "refagi",
    PhoneNumber : 37523624842,
    Email : "refai@gmail.com",
    Position : "CEO"
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error("Kesalahan:", error);
  });


axios
  .put(myApi, {
    id : 2,
    Name : "faza",
    PhoneNumber : 973462359,
    Email : "faza@gmail.com",
    Position : "Leader"
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error("Kesalahan:", error);
  });

const idToDelete = 2
axios
  .delete(`${myApi}/${idToDelete}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error("Kesalahan:", error);
  });

  //jalankan dengan comman node yugioh.js