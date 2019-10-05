module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'crud_sequelize',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
