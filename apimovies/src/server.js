const express = require('express') // Importando o Express

const app = express() // Inicializando o Express

app.use(express.json()) // Para informar que será utilizado o formato JSON

app.post("/users", (request, response) => { // POST
  const {name, email, password} = request.body // Para pegar informações do corpo da requisição

  response.json({name, email, password}) // Utilizando o padrão JSON para obter
})

const PORT = 3333 // Endereço do Servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) // Para escutar