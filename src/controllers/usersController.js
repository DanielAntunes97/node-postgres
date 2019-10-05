const express = require('express')

const { Users } = require('../models')

const router = express.Router()

router.get('/users', (req, res) => {
  Users.findAll()
    .then(users => res.send({ users }))
    .catch(err => res.status(400).send({ error: 'Find users failed' }))
})

router.get('/users/:id', (req, res) => {
  Users.findByPk(req.params.id)
    .then(user => res.send({ user }))
    .catch(err => res.status(400).send({ error: 'Find user failed' }))
})

router.post('/users', (req, res) => {
  Users.create(req.body)
    .then(user => res.send({ user }))
    .catch(err => res.status(400).send({ error: 'Insert failed' }))
})

router.patch('/users/:id', (req, res) => {
  Users.update(req.body, {
    where: { id: req.params.id }
  })
    .then(rowUpdated => {
      if (rowUpdated[0] === 1) res.send({ message: 'Updated successfully' })
    })
    .catch(err => res.status(400).send({ error: 'Update failed' }))
})

router.delete('/users/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(rowDeleted => {
      if (rowDeleted === 1) res.send({ message: 'Deleted successfully' })

      res.send({ message: 'Record not found' })
    })
    .catch(err => res.status(400).send({ error: 'Delete failed' }))
})

module.exports = app => app.use(router)
