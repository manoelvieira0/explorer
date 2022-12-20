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

  async update(request, response) {
    const { name, email } = request.body
    const { id } = request.params

    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]) // Obtendo o user de acordo com o id

    if(!user){
      throw new AppError("Usuário não encontrado.")
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]) // Para verificar se a pessoa está mudando seu e-mail para outro e-mail que já exista

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){ 
      throw new AppError("Este e-mail já está em uso.")
    }

    user.name = name
    user.email = email

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    updated_at = ?
    WHERE id = ?
    `, [user.name, user.email, new Date(), id]);
    return response.json()
  }
}

module.exports = UsersController