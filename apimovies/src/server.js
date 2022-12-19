const express = require('express') // Importando o Express

const app = express() // Inicializando o Express

app.post("/users", (request, response) => { // POST
  response.send("Você chamou o POST")
})

const PORT = 3333 // Endereço do Servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) // Para escutar