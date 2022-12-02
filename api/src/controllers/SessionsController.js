class SessionsController {
  async create(request, response) { // Para criar uma sessão.
    const { email, password } = request.body
    return response.json({email, password})
  }
}

module.exports = SessionsController