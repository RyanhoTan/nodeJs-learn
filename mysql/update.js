const mysql =require('mysql2')

const db = mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

const user = { id: 2, username: 'updateName', password: 'updatePassword' }

// const sqlStr = 'update users set username=?, password=? where id=?'

// 快捷方式，直接set ? 占位，后面在数组里加上对象
const sqlStr = 'update users set ? where id=?'

db.query(sqlStr, [user, user.id],  (err, res) => {
// db.query(sqlStr, [user.username, user.password, user.id],  (err, res) => {
    
    if (err) return console.log(err.message)
        if (res.affectedRows === 1) {
            console.log(res)
        }
})
