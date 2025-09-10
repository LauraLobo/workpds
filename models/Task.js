const {DataTypes} = require('sequelize')

const db = require ('../db/conn')

//criando a variavel com o skimo(campos e estilos que vão ser 
// criados na tabelas e nas colunas )
const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Task