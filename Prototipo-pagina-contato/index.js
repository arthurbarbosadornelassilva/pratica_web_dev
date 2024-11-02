// mongodb+srv://xarthsilvax:12345@cluster0.abfit.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const cors = require('cors')
const mongoose =  require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

const SAC = mongoose.model(`SAC`, mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    mensagem: {type: String}
}))

async function contatarAoMongoDB() {
    await mongoose.connect(`mongodb+srv://xarthsilvax:12345@cluster0.abfit.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)
}

app.get('/contato', async (req, res) => {
    const dados = await SAC.find()
    res.json(dados)
})

app.post('/contato', async (req, res) => {
    //obtém os dados enviados pelo cliente
    const nome = req.body.nome
    const email = req.body.email
    const mensagem  = req.body.mensagem
    
    const dado = new SAC({nome, email, mensagem}) // Cria uma instância de Mensagem

    //adiciona o novo filme à base no localhost
    // dados.push(dado)
    //responde ao cliente. Aqui, optamos por devolver a base inteira ao cliente, embora não seja obrigatório.
    // res.json(dados)

    //save salva o novo filme na base gerenciada pelo MongoDB
    await dado.save()
    const dados = await SAC.find()
    res.json(dados)
    })
    
    // IMPORTANTE: como podemos perceber, a lista com os objetos que utilizamos no programa está abaixo das funções 'get' e 'post', mas ainda assim o código funciona. Isso se dá porque a linguagem JS
    // let dados = [
    //     {
    //         nome: "Arthur",
    //         email: "exemplo.email@gmail.com",
    //         mensagem: "Essa é uma mensagem de testes"
    //     },
    //     {
    //         nome: "Guilherme",
    //         email: "exemplo2.email@gmail.com",
    //         mensagem: "Mensagem"
    //     }
    // ]

// criação da lógica da rota 'get', onde utilizamos a função get() com o parâmetro 'response' para coletar os dados do arquivo .json
// get http://localhost:3000/contato

app.listen(3000, () => {
    try{
        contatarAoMongoDB();
        console.log('up and running');
    }
    catch (e) {
        console.log('erro ao conectar com o banco de dados', e)
    }

})