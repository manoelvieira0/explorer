const fs = require('fs') // Lidar com manipulação de arquivos
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file), // Pegar da pasta temporária 
      path.resolve(uploadConfig.UPLOADS_FOLDER, file) // para a pasta de uploads
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    
    try {
      await fs.promises.stat(filePath); // Retorna o status do arquivo
    } catch {
      return
    }

    await fs.promises.unlink(filePath) // Para deletar
  }
}

module.exports = DiskStorage