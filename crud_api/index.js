const express = require('express')
const sqlite3 = require('sqlite3')
let app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log(`Server listening...`)
})

const db = new sqlite3.Database('./emp_database.db', (err) => {
  if(err){
    console.log(err)
  }else{
    db.run(`CREATE TABLE "employees" (
      "id"    INTEGER PRIMARY KEY AUTOINCREMENT,
      "name"    TEXT,
      "phoneNumber"    TEXT NOT NULL UNIQUE,
      "position"    TEXT,
      "email"    TEXT NOT NULL UNIQUE
      )`, (err) => {
        if(err){
          console.log(`Table Already Exists`)
        }
      })
  }
})

app.get("/employees", (req, res , next) => {
  db.all("SELECT * FROM employees", [], (err, data) => {
    if(err){
      res.status(500).json({
        "error": err.message
      })
      return
    }

    res.status(200).json({
      data,
      message: "Success Get All Employee"
    })
  })
})

// create employee
app.post("/employees", (req, res, next) => {
  let body = req.body

  console.log(req.body, "Creating BODY")

  let insert = `INSERT INTO employees VALUES (?, ?, ?, ?, ?)`
  db.run(insert, [null, body.name, body.phoneNumber, body.position, body.email], (err) => {
    if(err){
      res.status(500).json({
        "error": err.message
      })
    }else {
      res.status(200).json({
        data: body,
        message: "Success Creating Employee"
      })
    }
  })
})

// patch employee
app.put('/employees/:id', (req, res, next) => {
  db.run(`UPDATE employees SET name = ?, phoneNumber = ?, position = ?, email = ? WHERE id = ?`, 
    [req.body.name, req.body.phoneNumber, req.body.position, req.body.email, req.params.id], 
    err => err ? res.status(500).send({message: "Update Failed"}) : res.status(200).send({message: "Data Successfully Updated"}) )
})

// delete employee
app.delete('/employees/:id', (req, res, next) => {
  db.run(`DELETE FROM employees WHERE id = ?`, 
    [req.params.id], 
    err => err ? res.status(500).send({message: "Delete Failed"}) : res.status(200).send({message: "Data Successfully Deleted"}) )
})