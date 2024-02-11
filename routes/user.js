const express = require('express')
const router = express.Router()
const db = require('../Connection/database')

router.post('/add-user', (req, res) => {
    const query = "INSERT INTO user (username, emailid, phone) VALUES (?,?,?)"
    const values = [req.body.username, req.body.emailid, req.body.phone]
    db.execute(query, values)
        .then((result) => {
            res.json({ data: result })
        })
        .catch((e) => { console.log(e) })
})

router.get('/get-all-user', (req, res) => {
    const query = "SELECT * FROM user"
    db.execute(query)
        .then((rows) => {
            rows = rows.shift()
            res.json({ data: rows })
        })
        .catch((e) => {
            console.log(e)
        })
})

router.delete('/delete-user/:uid', (req, res) => {
    const query = "DELETE FROM user WHERE id = ?"
    const values = [req.params.uid]
    console.log(req.params.uid)
    db.execute(query, values)
        .then((rows) => {
            res.send('User Delete Successfully')
        })
        .catch((e) => { console.log(e) })
})

module.exports = router