const { Router} = require('express')

const usersRoutes = require('./users.routes') // Importando rota dos usuários

const routes = Router() // Rotas

routes.use("/users", usersRoutes) // Utilizando em barra users as rotas do usuário

module.exports = routes