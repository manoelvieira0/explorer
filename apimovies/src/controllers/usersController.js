class UsersController {
  /* 
    Index - GET para listar vários registros
    Show - GET para exibir registro específico
    Create - POST para criar um registro
    Update - PUT para atualizar um registro
    Delete - DELETE para remover um registro
  */

  create(request, response) {
    const { name, email, password } = request.body // Para pegar informações do corpo da requisição

    response.json({ name, email, password }) // Utilizando o padrão JSON para obter
  }
}

module.exports = UsersController