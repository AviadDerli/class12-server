const express = require('express')
const app = express()

require('./DL/db').connect()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const userRouter = require('./user/user.router')
app.use('/user', userRouter)

app.listen(4545, () => console.log("### Server is up ###"))