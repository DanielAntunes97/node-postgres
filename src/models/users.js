module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Preencha o campo nome'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Preencha o campo e-mail'
        },
        isEmail: {
          msg: 'Esse campo precisa ser um e-mail'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Preencha o campo senha'
        },
        len: {
          args: [4],
          msg: 'Sua senha deve ter no mínimo 4 caracteres'
        }
      }
    }
  })

  return Users
}
