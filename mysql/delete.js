const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// const user = { id: 2 }

// const sqlStr = 'delete from users where id=?'

// db.query(sqlStr, user.id, (err, res) => {
//     if (err) return console.log(err.message)
//     if (res.affectedRows === 1) {
//         console.log(res)
//     }
// })

// 直接删除太危险，一般是标记删除（update状态为不可用)
const user = { id: 3, status: 1 }

const sqlStr = 'update users set ? where id=?'

db.query(sqlStr, [user, user.id], (err, res) => {
    if (err) return console.log(err.message)
    if (res.affectedRows === 1) {
        console.log(res)
    }
})