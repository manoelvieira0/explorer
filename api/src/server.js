const express = require("express") // Importando o express

const routes = require("./routes") // Importe das rotas

const app = express() // Inicializando o express
app.use(express.json()) // Informar que utilizaremos o formato JSON

app.use(routes) // Usar as rotas

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 

