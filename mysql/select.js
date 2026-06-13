const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

db.query('select * from users', (errr, res) => {
    if (errr) return console.log(errr.message);
    console.log(res);
})