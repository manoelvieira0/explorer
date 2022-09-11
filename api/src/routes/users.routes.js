const {Router} = require('express')

const UserController = require('../controllers/UsersController')

const usersController = new UserController()

const usersRouter = Router()

usersRouter.post("/", usersController.create)
usersRouter.put("/:id", usersController.update)

module.exports = usersRouter