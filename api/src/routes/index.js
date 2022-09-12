const {Router} = require('express')

const usersRouter = require('./users.routes')
const notesRoutes = require('./notes.routes')

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/notes", notesRoutes)

module.exports = routes