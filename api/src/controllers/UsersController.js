const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection() // Conexão com o banco de dados
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]) // Verificando email da tabela

    if(checkUserExist){
      throw new AppError('Este e-mail já está em uso.')
    }

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]) // Cadastrando Usuário

    return response.status(201).json()
  }
}

module.exports = UsersController