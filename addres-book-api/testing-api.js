
const axios = require("axios");
const { response } = require("express");

//contact
const myApiContact = 'http://localhost:3000/contact'

// axios
//   .get(myApiContact)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });

axios
  .post(myApiContact, {
    name : "kikiw",
    phoneNumber : "088973462359",
    company : "rumah",
    email : "kikiw@gmail.com",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Kesalahan:", error);
  });


// const myApiContactId = 'http://localhost:3000/contact/id'
// axios
//   .put(myApiContact, {
//     id : 2,
//     name : "brongz",
//     phoneNumber : 973462359,
//     company : "rumah",
//     email : "brongz@gmail.com",
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });

// const myApiContactId = 'http://localhost:3000/contact/2'
// axios
//   .delete(`${myApiContact}`)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Menampilkan pesan kesalahan jika permintaan gagal
//     console.error("Kesalahan:", error);
//   });


//groups
// const myApiGroups = 'http://localhost:3000/groups'

// axios
//   .get(myApiGroups)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });


// axios
//   .post(myApiGroups, {
//     groupName : 'JBkenari'
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });


// const myApiGroupsId = 'http://localhost:3000/groups/id'
// axios
//   .put(myApiGroups, {
//     id : 2,
//     groupName : 'JBbiawak'
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });


// const myApiGroupsId = 'http://localhost:3000/groups/7'
// axios
//   .delete(`${myApiGroupsId}`)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });


//contactGroup
// const myApiContactGroup = 'http://localhost:3000/contactGroup'
// axios
//   .post(myApiContactGroup, {
//     contactId : 2,
//     groupId : 2
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });

 
// const myApiContactGroupId = 'http://localhost:3000/contactGroup/id'
// axios
//   .put(myApiContactGroupId, {
//     id : 2,
//     contactId : 1,
//     groupId : 1
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });


// const myApiContactGroupId = 'http://localhost:3000/contactGroup/4'
// axios
//   .delete(`${myApiContactGroupId}`)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Kesalahan:", error);
//   });