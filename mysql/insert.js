const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'admin123',
    database: 'my_db_01'
})

db.query(
    "insert into users (username, password) values ('insertname', 'password')",
     (err, res) => {
        if (err) return console.log(err.message)
        console.log(res)
})