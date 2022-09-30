const express = require("express")

const app = express()

app.get("/", (request, response) => {
  response.send("Olá Mundo!")
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))