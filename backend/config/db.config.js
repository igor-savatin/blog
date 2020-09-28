`use strict`

const mysql = require('mysql')

const dbConnection= mysql.createConnection({
    host: "127.0.0.1",
    user: "blog",
    password: "Blog@123",
    database: "blog"
})

dbConnection.connect(
    (err) =>{
        if (err)
            throw err
        console.log("connect");
    }
)

module.exports = dbConnection