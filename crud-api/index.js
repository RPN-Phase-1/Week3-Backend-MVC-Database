const sqlite3 = require('sqlite3');
const express = require('express');
const app = express();
const db = new sqlite3.Database('./emp_database.db')
const port = 4000;

app.use(express.json())
app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is listening in port: ${3000}`)
})


//Show Employees
app.get('/employees', (req,res) => {
    db.all(`SELECT *
            FROM Employees`,
            [],
            (err,data) => {
                if(err){
                    res.status(500).json({
                        "error": err.message
                    })
                    return
                }
                    res.status(200).json({
                        data,
                        "message" : "Success Get All Employee"
                    })
            })
})


//Create Employees

app.post('/employees', (req,res) =>{
    let body = req.body;
    console.log(req.body, "Creating BODY")

    let insert = `INSERT INTO Employees VALUES (?,?,?,?,?)`

    db.run(insert, [null, body.name, body.phoneNumber, body.position, body.email],
        (err) => {
            if(err){
                res.status(500).json({
                    "error": err.message
                })
            }else{
                res.status(200).json({
                    data:body,
                    message:"Success Creating Employee"
                })
            }
        })
})

//patch Employee
app.put("/employees/:id" , (req,res) => {
    let body = req.body;
    let params = req.params.id;

    db.run(`UPDATE Employees
            SET name = ?,
            phoneNumber =? ,
            position = ? ,
            email = ?
            WHERE id = ?`,
            [body.name, body.phoneNumber, body.position, body.email, params],
            (err) =>{
                if(err){
                    res.status(500).json({
                        'err' : err.message
                    })
                }else{
                    res.status(200).json({
                        'message': 'Update Data Success',
                        'data' : body
                    })
                }
            })
})

//delete Employee
app.delete("/employees/:id", (req,res) =>{
    let params = req.params.id;

    db.run(`DELETE FROM Employees
             WHERE id = ?`, [params], (err) =>{
        if(err){
            res.status(500).json({
                'err': err.message
            })
        }else{
            res.status(200).json({
                'message': 'Delete data Success'
            })
        }
    })
})

