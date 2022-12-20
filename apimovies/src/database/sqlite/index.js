const sqlite3 = require('sqlite3') // Drive
const sqlite = require('sqlite') // Conexão
const path = require('path')

async function sqliteConnection() { // Async para aguardar a conexão no banco de dados
  const database = await sqlite.open({ // Abrindo o banco de dados
    filename: path.resolve(__dirname, "..", "database.db"), // Localização do arquivo e salvando
    driver: sqlite3.Database
  })

  return database
} 

module.exports = sqliteConnection