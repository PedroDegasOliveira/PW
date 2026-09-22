// config inicial chamar o express vai procurar o módulo
const express = require('express')
const mongoose = require('mongoose')
const app = express() // Inicializar a app

// forma de ler JSON - UTILIZAR MIDDLEWARES
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

// rota inicial GET - só para checar se a API está de pé
app.get('/', (req, res) => {
  res.json({ message: 'Oi Express' })
})

// rotas do CRUD de Pessoa (Person)
const PersonRoutes = require('./routes/PersonRoutes')
app.use('/person', PersonRoutes)

// CONEXÃO NA MÁQUINA LOCAL - se funcionar vai no then, senão aponta o erro
// Troque a string abaixo se o seu MongoDB estiver em outra porta/host
mongoose
  .connect('mongodb://localhost:27017/ARQUIVO')
  .then(() => {
    console.log('Conectou ao banco!')
    // só sobe o servidor DEPOIS que o banco conectou
    app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))
  })
  .catch((err) => console.log(err))
