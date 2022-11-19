const express = require("express") // Importando o express

const app = express() // Inicializando o express

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 