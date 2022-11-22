const sqliteConnection = require('../../sqlite')

const createUsers = require('./createUsers')

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join('') // Pegar todas as migrations e juntar com Join

  sqliteConnection() // Para executar as migrations
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationsRun