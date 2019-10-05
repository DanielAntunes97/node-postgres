'use strict'

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users',
    [
      {
        name: 'Renard Doe',
        email: 'renard@test.com',
        password: '9ff7b641722c30acdc058f2499d97dd8',
        createdAt: new Date().toJSON().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toJSON().slice(0, 19).replace('T', ' ')
      },
      {
        name: 'John Travolta',
        email: 'jhon@test.com',
        password: '082b66a712e3efe31385f3158e057496',
        createdAt: new Date().toJSON().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toJSON().slice(0, 19).replace('T', ' ')
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
}
