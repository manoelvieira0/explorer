const { Router } = require('express') // Importação do Router

const UsersController = require('../controllers/usersController') // Importando o Users Controller

const usersRoutes = Router() // Criando a rota dos usuários

const usersController = new UsersController() // Instanciando 

usersRoutes.post("/", usersController.create) // Pssando a responsabilidade para o método create dentro do usersController

module.exports = usersRoutes // Exportando