const { Router } = require('express') // Importação do Router

const TagsController = require('../controllers/TagsController') // Importando o Users Controller

const tagsRoutes = Router() // Criando a rota dos usuários

const tagsController = new TagsController() // Instanciando 

tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes // Exportando