const {Router} = require('express')

const UserController = require('../controllers/UsersController')

const usersController = new UserController()

const usersRouter = Router()

usersRouter.post("/", usersController.create)

module.exports = usersRouter