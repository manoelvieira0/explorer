const express = require("express") // Importando o express

const app = express() // Inicializando o express

app.post("/users", (request, response) => { // Query Params

  response.send("Você chamou o POST")
})

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 