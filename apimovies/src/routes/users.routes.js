const { Router } = require('express') // Importação do Router

const usersRoutes = Router() // Criando a rota dos usuários

usersRoutes.post("/", (request, response) => { // POST
  const {name, email, password} = request.body // Para pegar informações do corpo da requisição

  response.json({name, email, password}) // Utilizando o padrão JSON para obter
})

module.exports = usersRoutes // Exportando