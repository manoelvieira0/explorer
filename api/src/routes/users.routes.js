const { Router } = require('express')

const usersRoutes = Router()

const UsersController = require("../controllers/UsersController")

function myMiddleware(request, response, next) {

  if (!request.body.isAdmin) {
    return response.json({ message: 'User Unathorized' })
  }

  next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes