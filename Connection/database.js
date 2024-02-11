const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    database:'booking-appointment-app',
    user:'root',
    password:'root1234',
})

module.exports = pool.promise()