class AppError {
  message
  statusCode

  constructor(message, statusCode = 400) { // Método carregado automaticamente no momento da instanciação
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError