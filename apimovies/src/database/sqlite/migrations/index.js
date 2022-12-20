const sqliteConnection = require('../../sqlite') // Conexão com o banco de dados
const createUsers = require('./createUsers')

async function migrationsRun(){
  const schemas = [ // Tabelas
    createUsers
  ].join('') // Para juntar todas as migrations

  sqliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error)) // Para executar
}

module.exports = migrationsRun