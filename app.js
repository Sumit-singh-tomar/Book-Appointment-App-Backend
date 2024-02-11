const http = require('http')
const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const userRouter = require('./routes/user')


const app = express()

app.use(cors())
app.use(bodyParser.json({ extended: true }))

app.use('/user', userRouter)

const server = http.createServer(app)

server.listen(4000)