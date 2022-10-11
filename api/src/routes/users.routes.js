const {Router} = require('express')

const UserController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersController = new UserController()

const usersRouter = Router()

usersRouter.post("/", usersController.create)
usersRouter.put("/:id", ensureAuthenticated, usersController.update)

module.exports = usersRouter