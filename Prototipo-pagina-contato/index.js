const express = require('express')
const app = express()
app.use(express.json())

// get http://localhost:3000/contato
app.get('/contato', (req, res) => {
    res.json(dados)
})

let dados = [
    {
        nome: "Arthur",
        email: "exemplo.email@gmail.com",
        mensagem: "Essa é uma mensagem de testes"
    },
    {
        nome: "Guilherme",
        email: "exemplo2.email@gmail.com",
        mensagem: "Mensagem"
    }
]

app.listen(3000, () => console.log('up and running'))