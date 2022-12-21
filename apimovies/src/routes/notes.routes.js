const { Router } = require('express') // Importação do Router

const NotesController = require('../controllers/NotesController') // Importando o Users Controller

const notesRoutes = Router() // Criando a rota dos usuários

const notesController = new NotesController() // Instanciando 

notesRoutes.post("/:user_id", notesController.create) // Passando a responsabilidade para o método create dentro do notesController

module.exports = notesRoutes // Exportando