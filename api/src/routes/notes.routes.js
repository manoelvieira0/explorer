const { Router } = require('express')

const notesRoutes = Router()

const NotesController = require("../controllers/NotesController")

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated) // Para aplicar para todas as rotas das notas.

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes