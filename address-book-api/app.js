const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/router")
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(router)

app.listen(port, () => {
  console.log("Server is running in port: " + port);
});