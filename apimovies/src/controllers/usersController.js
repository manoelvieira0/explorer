const AppError = require('../utils/AppError')
const { hash } = require('bcryptjs') // Função para gerar a criptografia

const sqliteConnection = require('../database/sqlite') // Importe da conexão com o banco de dados

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body // Para pegar informações do corpo da requisição

    const database = await sqliteConnection() // Conexão com o banco de dados

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]) // Para checar se o usuário já existe

    if (checkUserExists) {
      throw new AppError("Esta E-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8) // Variável com a senha criptografada (await para aguardar a promisse)

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]) // Para inserir na tabela 
    return response.status(201).json()
  }
}

module.exports = UsersController