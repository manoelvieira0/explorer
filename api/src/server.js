const express = require("express") // Importando o express

const app = express() // Inicializando o express

const PORT = 3000

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`))