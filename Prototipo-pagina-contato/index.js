const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

// criação da lógica da rota 'get', onde utilizamos a função get() com o parâmetro 'response' para coletar os dados do arquivo .json
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

app.post("/contato", (req, res) => {
    //obtém os dados enviados pelo cliente
    const nome = req.body.nome
    const email =  req.body.email
    const mensagem = req.body.mensagem
    //monta um objeto agrupando os dados. Ele representa um novo filme
    const dado = {Nome: nome, Email: email, Mensagem: mensagem}
    //adiciona o novo filme à base
    dados.push(dado)
    res.json(dados)
    })

app.listen(3000, () => console.log('up and running'))