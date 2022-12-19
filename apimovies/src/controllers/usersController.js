class UsersController {
  create(request, response) {
    const { name, email, password } = request.body // Para pegar informações do corpo da requisição

    response.status(201).json({ name, email, password }) // Utilizando o padrão JSON para obter
  }
}

module.exports = UsersController