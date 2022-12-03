const { path } = require('path')
const multer = require('multer')
const crypto = require('crypto')

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")//  Pasta temporária
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads") // Pasta de Uploads

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER, // Para indicar o destino
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex") // Para criar um hash de forma aleatório, para evitar nomes iguais
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    } // Nome do arquivo
  })
}

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}