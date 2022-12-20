const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite') // Importe da conexão com o banco de dados

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body // Para pegar informações do corpo da requisição

    const database = await sqliteConnection() // Conexão com o banco de dados

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]) // Para checar se o usuário já existe

    if(checkUserExists){
      throw new AppError("Esta E-mail já está em uso.")
    }
    
    return response.status(201).json()
  }
}

module.exports = UsersController