const express = require("express") // Importando o express

const app = express() // Inicializando o express
app.use(express.json()) // Informar que utilizaremos o formato JSON

app.post("/users", (request, response) => { // Body Params
  const {name, email, password} = request.body
  response.json({name, email, password}) // Utilizando a resposta como JSON
})

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 