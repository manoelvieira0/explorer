const config = require("../../../knexfile")
const knex = require("knex")

const connection = knex(config.development) // Conexão com do knex com o banco de dados

module.exports = connection