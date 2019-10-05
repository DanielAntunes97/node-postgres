const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({
    title: 'A simple API using Node.js and PostgreSQL',
    endpoints: {
      GET: {
        1: '/users',
        2: '/users/:id'
      },
      POST: '/users',
      PUT: '/users',
      DELETE: '/users/:id'
    }
  })
})

require('./controllers/usersController')(app)

app.listen(port)
