const sqlite3 = require("sqlite3")
const express = require("express")

const app = express();
const port = 4000;

//aktifkan parsing json
app.use(express.json())

//aktifin urlendcode
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/reno', (req, res) => {
    res.send('Hello reno')
})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})



const db = new sqlite3.Database('./employee_database.db', (err) => {
    if (err){
        console.log(err)
        console.log('Table not Created')
    } else {
        db.run(`CREATE TABLE Employee(
            id INTEGER PRIMARY KEY,
            Name TEXT NOT NULL,
            PhoneNumber INTEGER NOT NULL UNIQUE,
            Email TEXT UNIQUE,
            Position TEXT NOT NULL)`, (err) => {
            if (err){
                console.log(err)
                console.log('Table is already exists')
            } else {
                console.log('Table Employee Are Created')
            }
        })
    }
})

//menampilkan data dari database ke server 
app.get("/Employee", (req, res) => {
    db.all("SELECT * FROM Employee", [], (err, data) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
  
        return;
      }
  
      res.status(200).json({
        data,
        message: "Success Get All Employee",
      });
    });
  });

//menambah data dari server ke database
  app.post("/Employee", (req, res) => {
    let body = req.body;
  
    console.log(req.body, "Creating BODY");
  
    let insert = `INSERT INTO Employee VALUES (?, ?, ?, ?, ?)`;
    db.run(
      insert,
      [null, body.Name, body.PhoneNumber, body.Email, body.Position],
      (err) => {
        if (err) {
          res.status(500).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            data: body,
            message: "Success Creating Employee",
          });
        }
      }
    );
  });


  //update data 
  app.put("/Employee", (req, res) => {
    let body = req.body;
  
    console.log(req.body, "Creating BODY");
  
    let insert = `UPDATE Employee SET Name = ?, PhoneNumber = ?, Email = ?, Position = ? WHERE id = ?`;
    db.run(
      insert,
      [body.Name, body.PhoneNumber, body.Email, body.Position, body.id],
      (err) => {
        if (err) {
          res.status(500).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            data: body,
            message: "Success Update Employee",
          });
        }
      }
    );
  });

//delete data
  app.delete("/Employee/:id", (req, res) => {
    let body = req.params.id;
  
    // console.log(req.body, "Creating BODY");
  
    let insert = `DELETE FROM Employee WHERE id = ?`;
    db.run(
      insert,
      [body],
      (err) => {
        if (err) {
          res.status(500).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            data: body,
            message: "Success Delete Employee",
          });
        }
      }
    );
  });


  //jalankan dengan command  nodemon start