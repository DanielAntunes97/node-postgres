const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./controllers/usersController')(app)

app.listen(port)
