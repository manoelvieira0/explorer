const AppError = require('../utils/AppError')

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body // Para pegar informações do corpo da requisição

    if(!name){
      throw new AppError("O nome é obrigatório.") // Para informar o erro
    }

    response.status(201).json({ name, email, password }) // Utilizando o padrão JSON para obter
  }
}

module.exports = UsersController